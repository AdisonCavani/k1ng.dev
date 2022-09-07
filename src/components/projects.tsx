import { SimpleGrid } from '@mantine/core'
import ProjectCard from './projectCard'
import ProjectSchema from '@data/projectSchema'

const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-bold text-4xl">My projects</h2>
          <div className="border border-neutral-300"></div>
          <p className="text-center font-medium text-lg text-neutral-600">
            A list of my personal projects.
          </p>
        </div>
      </div>
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
