const shouldAnalyzeBundles = process.env.ANALYZE === "true";

/** @type {import('next').NextConfig} */
let nextConfig = {
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

if (shouldAnalyzeBundles) {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    openAnalyzer: true,
    enabled: true,
  });
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
