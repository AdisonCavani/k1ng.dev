import PersonalTimeline from '@components/personalTimeline'
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  Center
} from '@mantine/core'
import type { NextPage } from 'next'
import ProjectCard from '@components/projectCard'
import TechStack from '@components/techStack'

import DistroGrubThemesImage from '@images/distro-grub-themes.png'
import { PageSEO } from '@components/seo'
import SiteMetadata from '@lib/siteMetadata'

const Home: NextPage = () => {
  return (
    <>
      <PageSEO
        title={SiteMetadata.title}
        description={SiteMetadata.description}
      />

      <Container mb="xl">
        <Stack>
          <Title>Hello! I&apos;m Adison Cavani</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            luctus tortor. Nullam ultricies facilisis tempor. Phasellus eget
            nibh mauris.
          </Text>
          <PersonalTimeline />
          <Center>
            <Stack>
              <Title align="center">My projects</Title>
              <Divider size="sm" />
              <Text align="center" size="lg" weight={500} color="dimmed">
                A list of my personal projects.
              </Text>
            </Stack>
          </Center>
          <SimpleGrid
            spacing="md"
            cols={3}
            breakpoints={[
              { maxWidth: 1920, cols: 3, spacing: 'md' },
              { maxWidth: 1024, cols: 2, spacing: 'md' },
              { maxWidth: 690, cols: 1, spacing: 'md' }
            ]}
          >
            <ProjectCard
              title="distro-grub-themes"
              desc="A pack of GRUB2 themes for different Linux distributions and OSs. It aims to replace the default GRUB look, with a nice and colorful theme."
              lang="CI & CD"
              color="violet"
              img={DistroGrubThemesImage.src}
              githubUrl="https://github.com/AdisonCavani/distro-grub-themes"
              externalUrl="https://github.com/AdisonCavani/distro-grub-themes"
            />
            <ProjectCard
              title="adison.me"
              desc="This website is a personal website I built to showcase my projects and experience."
              lang="TypeScript"
              color="blue"
              githubUrl="https://github.com/AdisonCavani/adisoncavani.github.io"
              externalUrl="https://adison.me"
              img={DistroGrubThemesImage.src}
            />
            <ProjectCard
              title="adison.me"
              desc="This website is a personal website I built to showcase my projects and experience."
              lang="TypeScript"
              color="blue"
              githubUrl="https://github.com/AdisonCavani/adisoncavani.github.io"
              externalUrl="https://adison.me"
              img={DistroGrubThemesImage.src}
            />
          </SimpleGrid>
          <Center>
            <Stack>
              <Title align="center">Technologies</Title>
              <Divider size="sm" />
              <Text align="center" size="lg" weight={500} color="dimmed">
                A list of technologies I&apos;m familiar with.
              </Text>
            </Stack>
          </Center>
          <TechStack />
        </Stack>
      </Container>
    </>
  )
}

export default Home
