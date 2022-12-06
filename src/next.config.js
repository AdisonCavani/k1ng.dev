/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io", "raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },

  async rewrites() {
    return [
      {
        source: "/atom.xml",
        destination: "/api/atom",
      },
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
    ];
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
