import { Center, SimpleGrid, Stack, Text, Title, Divider } from '@mantine/core'
import ProjectCard from './projectCard'
import DistroGrubThemesImage from '@images/distro-grub-themes.webp'
import WebsiteDark from '@images/adison-me-dark.webp'

const Projects = () => {
  return (
    <>
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
          img={DistroGrubThemesImage}
          githubUrl="https://github.com/AdisonCavani/distro-grub-themes"
          externalUrl="https://github.com/AdisonCavani/distro-grub-themes"
        />
        <ProjectCard
          title="adison.me"
          desc={
            <Text>
              My personal website. Built with{' '}
              <Text
                variant="link"
                component="a"
                href="https://nextjs.org"
                target="_blank"
              >
                Next.js
              </Text>
              , deployed to{' '}
              <Text
                variant="link"
                component="a"
                href="https://vercel.com"
                target="_blank"
              >
                Vercel
              </Text>
              . Uses self-hosted{' '}
              <Text
                variant="link"
                component="a"
                href="https://adison.me/analytics"
                target="_blank"
              >
                plausible analytics
              </Text>{' '}
              on{' '}
              <Text
                variant="link"
                component="a"
                href="https://cloud.google.com/compute"
                target="_blank"
              >
                GCP Compute Engine
              </Text>
            </Text>
          }
          lang="TypeScript"
          color="blue"
          githubUrl="https://github.com/AdisonCavani/adison.me"
          externalUrl="https://adison.me"
          img={WebsiteDark}
        />
      </SimpleGrid>
    </>
  )
}

export default Projects
