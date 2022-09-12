import { TechStackColorSchema, TechStackSchema } from '@data/techStackSchema'
import { Tab } from '@headlessui/react'
import TechIcon from './techIcon'

const TechStackList = () => {
  return (
    <Tab.Group>
      <Tab.List className="mb-3 flex flex-wrap justify-center gap-2">
        {Object.keys(TechStackSchema).map((value, index) => (
          <Tab
            key={index}
            className={`focus:outline-none rounded-3xl bg-neutral-200 px-4 py-2 dark:bg-zinc-800 ${TechStackColorSchema[value].background}`}
          >
            <div
              className={`flex flex-row items-center gap-2 text-sm font-bold text-neutral-600 dark:text-neutral-200 ${TechStackColorSchema[value].color}`}
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
  )
}

export default TechStackList
