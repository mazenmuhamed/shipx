import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Optimizes the quality of an uploaded image using a server-side API.
 * This function reads the file as an ArrayBuffer,
 * sends it to the server for processing, and returns a new File object.
 */
export async function optimizeUploadedImageQuality(file: File): Promise<File> {
  return new Promise((resolve, reject) => {
    // Create a new FileReader
    const reader = new FileReader()

    // Set up the FileReader onload event
    reader.onload = async event => {
      try {
        if (!event.target || !event.target.result) {
          throw new Error('Failed to read file')
        }

        // Get the file data as an ArrayBuffer
        const arrayBuffer = event.target.result as ArrayBuffer

        // Send the image to the server-side API for processing with sharp
        const response = await fetch('/api/optimize-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
          },
          body: arrayBuffer,
        })

        if (!response.ok) throw new Error('Failed to optimize image')

        // Get the processed image as a Blob
        const processedImageBlob = await response.blob()

        // Create a new File object from the Blob
        const processedFile = new File([processedImageBlob], file.name, {
          type: 'image/jpeg',
        })

        resolve(processedFile)
      } catch (error) {
        reject(error)
      }
    }

    reader.onerror = () => reject(new Error('Error reading file'))

    reader.readAsArrayBuffer(file)
  })
}
