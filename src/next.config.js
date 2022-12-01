/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
