import { toast } from 'sonner'
import { useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { ClientUploadedFileData } from 'uploadthing/types'

import { optimizeUploadedImageQuality } from '@/lib/utils'

import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'

type Props = {
  onUploadBegin?: VoidFunction
}

export const useUploadMedia = (props?: Props) => {
  const [isUploading, setIsUploading] = useState(false)

  function handleUploadBegin() {
    setIsUploading(true)
    props?.onUploadBegin?.()
  }

  /**
   * Handles the image upload process.
   * It optimizes the image quality before uploading.
   */
  async function handleUploadImage(files: File[]) {
    setIsUploading(true)
    try {
      const images = await Promise.all(
        files.map(async file => {
          return await optimizeUploadedImageQuality(file)
        }),
      )
      return images
    } catch (error) {
      console.log('[UPLOAD_IMAGE_ERR]', error)
      toast.error('Image upload failed, please try again.')

      return []
    }
  }

  /**
   * Handles the completion of the upload process.
   * It updates the form field with the uploaded image URL.
   */
  function handleUploadComplete(
    res: ClientUploadedFileData<{ uploadedBy: string }>[],
    field: ControllerRenderProps<CreatePostSchema, 'image'>,
  ) {
    field.onChange(res[0]?.ufsUrl)
    setIsUploading(false)
  }

  return {
    isUploading,
    handleUploadImage,
    handleUploadComplete,
    handleUploadBegin,
  }
}
