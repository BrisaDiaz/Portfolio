const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    domains: [
      'camo.githubusercontent.com',
      'drive.google.com',
      'res.cloudinary.com',
      'www.w3.org',
      'i.ibb.co',
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
