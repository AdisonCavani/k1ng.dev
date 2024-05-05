import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer({
    openAnalyzer: true,
    enabled: true,
  })(nextConfig);
}

export default nextConfig;
