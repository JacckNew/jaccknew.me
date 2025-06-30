// Generate Open Graph image for sharing on social media
import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'JackNew\'s Blog'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div tw="flex flex-col w-full py-12 px-8 md:items-center justify-center">
          <div tw="flex items-center mb-8">
            <div tw="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
              <span tw="text-white text-xl font-bold">J</span>
            </div>
            <span tw="text-2xl font-bold text-gray-800">JackNew's Blog</span>
          </div>
          <h1 tw="flex flex-col text-5xl font-bold tracking-tight text-center text-gray-900 leading-tight max-w-4xl px-4">
            {title}
          </h1>
          <div tw="flex items-center mt-8 text-gray-600">
            <span tw="text-lg">✨ Thoughts, Ideas & Reflections</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
