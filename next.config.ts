import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'a1yha7ljr7.ufs.sh' },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
