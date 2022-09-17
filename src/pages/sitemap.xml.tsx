import SiteMetadata from '@data/siteMetadata'
import { SanityClient } from '@lib/sanityServer'
import { postSlugsQuery } from 'lib/queries'
import { GetServerSideProps } from 'next'

const createSitemap = (slugs: any[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug: string) => {
            return `
                <url>
                    <loc>${`${SiteMetadata.siteUrl}/${slug}`}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = await SanityClient.fetch(postSlugsQuery)
  const allPages = [
    ...allPosts.map((slug: string) => `blog/${slug}`),
    ...['/', 'blog']
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(createSitemap(allPages))
  res.end()

  return {
    props: {}
  }
}

export default function Sitemap() {
  return null
}
