/** @type {import('next').NextConfig} */

const API_LINK = process.env.NEXT_PUBLIC_API;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
  },
  async rewrites() {
    return [
      {
        source: '/api/list',
        destination: API_LINK,
      },
    ];
  },
};

module.exports = nextConfig;
