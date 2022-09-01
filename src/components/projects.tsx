import { Center, SimpleGrid, Stack, Text, Title, Divider } from '@mantine/core'
import ProjectCard from './projectCard'
import ProjectSchema from '@data/projectSchema'

const Projects = () => {
  return (
    <>
      <Center>
        <Stack>
          <Title align="center">My projects</Title>
          <Divider size="sm" />
          <Text align="center" size="lg" weight={500} color="secondary">
            A list of my personal projects.
          </Text>
        </Stack>
      </Center>
      <SimpleGrid
        spacing="md"
        cols={3}
        breakpoints={[
          { maxWidth: 1024, cols: 2 },
          { maxWidth: 690, cols: 1 }
        ]}
      >
        {ProjectSchema.map((value, index) => (
          <ProjectCard key={index} {...value} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Projects
