import SiteMetadata from '@data/siteMetadata'
import { urlFor } from '@lib/sanity'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CommonSEOProps {
  title: string
  description: string
  ogType: string
  ogImage:
    | string
    | {
        '@type': string
        url: string
      }[]
  twImage: string
  canonicalUrl?: string
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl
}: CommonSEOProps) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${SiteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SiteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SiteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${SiteMetadata.siteUrl}${router.asPath}`
        }
      />
    </Head>
  )
}

interface PageSEOProps {
  title: string
  description: string
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = SiteMetadata.siteUrl + SiteMetadata.socialBanner
  const twImageUrl = SiteMetadata.siteUrl + SiteMetadata.socialBanner

  return (
    <CommonSEO
      title={`${title} - ${SiteMetadata.title}`}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

export type BlogSEOProps = {
  title: string
  description: string
  publishedAt: string
  coverImage: string
}

export const BlogSEO = ({
  title,
  publishedAt,
  description,
  coverImage
}: BlogSEOProps) => {
  const authorList = {
    '@type': 'Person',
    name: SiteMetadata.author
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SiteMetadata.siteUrl
    },
    headline: title,
    datePublished: publishedAt,
    author: authorList,
    publisher: {
      '@type': 'Person',
      name: SiteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${SiteMetadata.siteUrl}${SiteMetadata.siteLogo}`
      }
    },
    description: description
  }

  const ogImageUrl = urlFor(coverImage).width(1200).height(628).url()
  const twImageUrl = urlFor(coverImage).width(1200).height(628).url()

  return (
    <>
      <CommonSEO
        title={`${title} - ${SiteMetadata.title}`}
        description={description}
        ogType="article"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        {publishedAt && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
      </Head>
    </>
  )
}
