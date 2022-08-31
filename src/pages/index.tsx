import PersonalTimeline from '@components/personalTimeline'
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  Center,
  createStyles
} from '@mantine/core'
import type { NextPage } from 'next'
import ProjectCard from '@components/projectCard'
import TechStack from '@components/techStack'
import { PageSEO } from '@components/seo'
import SiteMetadata from '@data/siteMetadata'
import Image from 'next/image'

import AvatarImage from '@images/avatar.webp'
import DistroGrubThemesImage from '@images/distro-grub-themes.webp'

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',

    maxWidth: '42rem',

    '@media (min-width: 640px)': {
      flexDirection: 'row'
    }
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '2rem'
  },

  image: {
    position: 'relative',
    marginBottom: '2rem',
    marginRight: 'auto',
    width: 80,

    borderWidth: 2,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor:
      theme.colorScheme === 'dark' ? theme.colors.gray[6] : 'transparent',

    '@media (min-width: 640px)': {
      width: 176,
      marginBottom: 0
    }
  }
}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <PageSEO
        title={SiteMetadata.title}
        description={SiteMetadata.description}
      />

      <Container mb="xl">
        <Stack spacing="lg">
          <div className={classes.container}>
            <div className={classes.text}>
              <Title mb=".25rem">Adison Cavani</Title>
              <Text mb="1rem">
                Full-stack Developer, <strong>student</strong>
              </Text>
              <Text>
                .NET Backend Developer. Currently learning web development -
                cloud, serverless and React w/ Next.js.
              </Text>
            </div>
            <div className={classes.image}>
              <Image
                src={AvatarImage}
                alt="Adison Cavani"
                width={176}
                height={176}
                sizes="30vw"
                priority
              />
            </div>
          </div>
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
              desc="This website is a personal website I built to showcase my projects and experience"
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
