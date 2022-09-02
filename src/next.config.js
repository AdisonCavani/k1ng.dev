const ContentSecurityPolicy = `
  frame-ancestors 'none';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    // See: https://github.com/w3c/webappsec-permissions-policy/issues/189
    key: 'Permissions-Policy',
    value:
      'accelerometer=(),autoplay=(),camera=(),display-capture=(),geolocation=(),microphone=(),payment=(),usb=()'
  }
]

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
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = nextConfig
