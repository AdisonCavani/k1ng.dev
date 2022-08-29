import Script from 'next/script'

const isProduction = process.env.NODE_ENV === 'production'

const PlausibleAnalytics = () => {
  return (
    <>
      {isProduction && (
        <>
          <Script
            strategy="lazyOnload"
            data-domain="adison.me"
            src="https://analytics.adison.me/js/plausible.js"
          />
          <Script strategy="lazyOnload" id="plausible-script">
            {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
          </Script>
        </>
      )}
    </>
  )
}

export default PlausibleAnalytics

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName: string, ...rest: any[]) => {
  // @ts-ignore: Unreachable code error
  if (isProduction) return window.plausible?.(eventName, ...rest)
}
