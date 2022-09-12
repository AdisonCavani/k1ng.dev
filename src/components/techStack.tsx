import Divider from '@ui/text/divider'
import SecondaryText from '@ui/text/secondary'
import dynamic from 'next/dynamic'

const TechStackList = dynamic(() => import('./techStackList'), {
  loading: () => <p>Loading...</p>
})

const TechStack = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-4xl font-bold">Technologies</h2>
          <Divider />
          <SecondaryText className="text-center text-lg font-medium">
            A list of technologies I&apos;m familiar with.
          </SecondaryText>
        </div>
      </div>
      <TechStackList />
    </>
  )
}

export default TechStack
