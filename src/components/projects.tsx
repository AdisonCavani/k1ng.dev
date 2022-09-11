import ProjectCard from './projectCard'
import ProjectSchema from '@data/projectSchema'
import SecondaryText from '@ui/text/secondary'
import Divider from '@ui/text/divider'

const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-4xl font-bold">My projects</h2>
          <Divider />
          <SecondaryText className="text-center text-lg font-medium">
            A list of my personal projects.
          </SecondaryText>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectSchema().map((value, index) => (
          <ProjectCard key={index} {...value} />
        ))}
      </div>
    </>
  )
}

export default Projects
