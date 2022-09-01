const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' analytics.adison.me vitals.vercel-insights.com;
  connect-src 'self' analytics.adison.me vitals.vercel-insights.com;
  style-src 'unsafe-inline';
  font-src 'self';  
  img-src * 'self' data: https:;
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
      'accelerometer=(),ambient-light-sensor=(),attribution-reporting=(),autoplay=(),battery=(),camera=(),clipboard-read=(),clipboard-write=(),conversion-measurement=(),cross-origin-isolated=(),direct-sockets=(),display-capture=(),document-domain=(),encrypted-media=(),execution-while-not-rendered=(),execution-while-out-of-viewport=(),focus-without-user-activation=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=(),hid=(),idle-detection=(),interest-cohort=(),magnetometer=(),microphone=(),midi=(),navigation-override=(),otp-credentials=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),shared-autofill=(),speaker-selection=(),storage-access-api=(),sync-script=(),sync-xhr=(),trust-token-redemption=(),usb=(),vertical-scroll=(),wake-lock=(),web-share=(),window-placement=(),xr-spatial-tracking=()'
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
