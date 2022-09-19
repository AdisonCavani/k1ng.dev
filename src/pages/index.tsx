import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { PageSEO } from '@components/seo'
import SiteMetadata from '@data/siteMetadata'
import { Suspense } from 'react'

const Introduction = dynamic(() => import('@components/introduction'), {
  suspense: true
})

const Projects = dynamic(() => import('@components/projects'), {
  suspense: true
})

const TechStack = dynamic(() => import('@components/techStack'), {
  suspense: true
})

const Home: NextPage = () => {
  return (
    <>
      <PageSEO title="Home" description={SiteMetadata.description} />

      <div className="mx-auto mb-6 max-w-4xl px-4">
        <div className="flex flex-col gap-6">
          <Suspense fallback={null}>
            <Introduction />
            <Projects />
            <TechStack />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Home
