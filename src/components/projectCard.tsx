import { IconBrandGithub } from '@tabler/icons'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ProjectCardProps = {
  title: string
  desc: ReactNode
  lang: string
  color: string
  img: StaticImageData
  githubUrl?: string
  externalUrl?: string
}

const ProjectCard = ({
  title,
  desc,
  lang,
  color,
  img,
  githubUrl,
  externalUrl
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg border-2 overflow-hidden">
      <div className="w-full cursor-pointer">
        <a href={externalUrl} target="_blank" rel="noreferrer">
          <Image
            width={640}
            height={360}
            src={img}
            alt="Project image"
            placeholder="blur"
          />
        </a>
      </div>
      <div className="px-6 pb-5">
        <div className="flex flex-row justify-between mt-4 mb-3">
          <p className="font-medium">{title}</p>
          <div>
            <span
              className={`bg-${color}-100 text-${color}-500 font-bold px-2.5 py-0.5 rounded-xl uppercase`}
              style={{ fontSize: 11 }}
            >
              {lang}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-neutral-600">{desc}</p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full font-semibold text-sm text-blue-500 hover:bg-blue-100 rounded-md py-2"
          >
            <div className="flex gap-2 justify-center">
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
