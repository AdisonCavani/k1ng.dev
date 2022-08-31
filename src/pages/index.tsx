import PersonalTimeline from '@components/personalTimeline'
import { Container, Stack } from '@mantine/core'
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

      <Container mb="xl">
        <Stack spacing="xl">
          <Introduction />
          <PersonalTimeline />
          <Projects />
          <TechStack />
        </Stack>
      </Container>
    </>
  )
}

export default Home
