import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'avatars.githubusercontent.com' }],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
