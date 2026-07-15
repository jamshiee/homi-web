/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // NOT 'export'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.r2.dev', // or your actual R2/CDN domain for property images
      },
    ],
  },
};

module.exports = nextConfig;