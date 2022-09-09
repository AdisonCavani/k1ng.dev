import {
  TechStackCloudSchema,
  TechStackSoftwareSchema,
  TechStackToolsSchema,
  TechStackWebSchema
} from '@data/techStackSchema'
import { Tab } from '@headlessui/react'
import {
  IconCloudComputing,
  IconBrandChrome,
  IconDevices,
  IconTools
} from '@tabler/icons'
import TechIcon from './techIcon'

const TechStack = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-bold text-4xl">Technologies</h2>
          <div className="border border-neutral-300"></div>
          <p className="text-center font-medium text-lg text-neutral-600">
            A list of technologies I&apos;m familiar with.
          </p>
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="flex flex-wrap mb-3 justify-center gap-2">
          <Tab className="rounded-3xl px-4 py-2 bg-neutral-200 ui-selected:bg-red-100">
            <div className="flex items-center flex-row text-sm font-bold text-neutral-500 ui-selected:text-red-800">
              <IconBrandChrome size={18} className="mr-2" />
              <p>Web</p>
            </div>
          </Tab>
          <Tab className="rounded-3xl px-4 py-2 bg-neutral-200 ui-selected:bg-black">
            <div className="flex items-center flex-row text-sm font-bold text-neutral-500 ui-selected:text-white">
              <IconDevices size={18} className="mr-2" />
              <p>Software</p>
            </div>
          </Tab>
          <Tab className="rounded-3xl px-4 py-2 bg-neutral-200 ui-selected:bg-blue-100">
            <div className="flex items-center flex-row text-sm font-bold text-neutral-500 ui-selected:text-blue-500">
              <IconCloudComputing size={18} className="mr-2" />
              <p>Cloud</p>
            </div>
          </Tab>
          <Tab className="rounded-3xl px-4 py-2 bg-neutral-200 ui-selected:bg-green-100">
            <div className="flex items-center flex-row text-sm font-bold text-neutral-500 ui-selected:text-green-700">
              <IconTools size={18} className="mr-2" />
              <p>Tools</p>
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TechStackWebSchema.map((value, index) => (
                <TechIcon key={index} {...value} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TechStackSoftwareSchema.map((value, index) => (
                <TechIcon key={index} {...value} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TechStackCloudSchema.map((value, index) => (
                <TechIcon key={index} {...value} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TechStackToolsSchema.map((value, index) => (
                <TechIcon key={index} {...value} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

export default TechStack
