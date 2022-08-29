/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/analytics',
        destination: 'https://analytics.adison.me/adison.me'
      }
    ]
  }
}

module.exports = nextConfig
