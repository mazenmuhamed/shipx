import { NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(request: Request) {
  try {
    const arrayBuffer = await request.arrayBuffer()

    if (!arrayBuffer) {
      return new NextResponse('No image data provided', { status: 400 })
    }

    const buffer = Buffer.from(arrayBuffer)

    const processedImageBuffer = await sharp(buffer)
      .resize({
        width: 900,
        height: undefined,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 80 })
      .toBuffer()

    return new NextResponse(processedImageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })
  } catch (error) {
    console.error('Error processing image:', error)

    return new NextResponse('Failed to process image', { status: 500 })
  }
}
