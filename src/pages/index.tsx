import type { NextPage } from 'next'
import TechStack from '@components/techStack'
import { PageSEO } from '@components/seo'
import SiteMetadata from '@data/siteMetadata'
import Introduction from '@components/introduction'
import Projects from '@components/projects'

const Home: NextPage = () => {
  return (
    <>
      <PageSEO
        title={SiteMetadata.title}
        description={SiteMetadata.description}
      />

      <div className="mx-auto mb-6 max-w-4xl px-4">
        <div className="flex flex-col gap-6">
          <Introduction />
          <Projects />
          <TechStack />
        </div>
      </div>
    </>
  )
}

export default Home
