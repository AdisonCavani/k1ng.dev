/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/analytics',
        destination: 'https://analytics.adison.me/adison.me',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
