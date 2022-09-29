import { IconBrandGithub } from '@tabler/icons'
import SecondaryText from '@ui/text/secondary'
import Image, { StaticImageData } from 'next/future/image'
import { ReactNode } from 'react'

export type ProjectCardProps = {
  title: string
  desc: ReactNode
  lang: string
  color: 'blue' | 'violet' | 'green'
  img: StaticImageData
  priority?: boolean
  githubUrl?: string
  externalUrl?: string
}

const Colors = {
  blue: 'bg-blue-100 text-blue-900 dark:bg-blue-800/20 dark:text-blue-300',
  violet:
    'bg-violet-100 text-violet-900 dark:bg-violet-800/20 dark:text-violet-300',
  green: 'bg-green-100 text-green-900 dark:bg-green-800/20 dark:text-green-200'
}

const ProjectCard = ({
  title,
  desc,
  lang,
  color,
  img,
  priority,
  githubUrl,
  externalUrl
}: ProjectCardProps) => {
  const colorType = Colors[color]

  return (
    <div className="flex flex-col ease-[spring(1 100 10 10)] overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-dark-500 dark:bg-dark-600">
      <div className="w-full cursor-pointer">
        <a href={externalUrl} target="_blank" rel="noreferrer">
          <Image
            width={480}
            height={270}
            src={img}
            alt="Project image"
            placeholder={priority ? 'empty' : 'blur'}
            priority={priority}
          />
        </a>
      </div>
      <div className="px-6 pb-5 flex flex-col flex-grow">
        <div className="mt-4 mb-3 flex flex-row justify-between">
          <p className="font-medium">{title}</p>
          <div>
            <span
              className={`rounded-xl px-2.5 py-0.5 text-[11px] font-bold uppercase ${colorType}`}
            >
              {lang}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <SecondaryText className="text-sm">{desc}</SecondaryText>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full mt-4 rounded-md bg-blue-000 text-blue-800 py-2 text-sm font-semibold dark:bg-blue-800/20 dark:text-blue-200"
          >
            <div className="flex justify-center gap-2">
              <IconBrandGithub size={20} />
              Github
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
