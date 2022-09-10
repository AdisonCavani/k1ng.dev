import { TechStackSchema, TechStackColorSchema } from '@data/techStackSchema'
import { Tab } from '@headlessui/react'
import Divider from '@ui/text/divider'
import SecondaryText from '@ui/text/secondary'
import TechIcon from './techIcon'

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
      <Tab.Group>
        <Tab.List className="mb-3 flex flex-wrap justify-center gap-2">
          {Object.keys(TechStackSchema).map((value, index) => (
            <Tab
              key={index}
              className={`rounded-3xl bg-neutral-200 px-4 py-2 dark:bg-zinc-800 ${TechStackColorSchema[value].background}`}
            >
              <div
                className={`${TechStackColorSchema[value].color} flex flex-row items-center text-sm font-bold text-neutral-500 dark:text-neutral-200`}
              >
                {TechStackColorSchema[value].icon}
                <p>{value}</p>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(TechStackSchema).map((categories, catIndex) => (
            <Tab.Panel key={catIndex}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {categories.map((value, index) => (
                  <TechIcon key={index} {...value} />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

export default TechStack
