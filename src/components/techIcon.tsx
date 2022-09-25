import SecondaryText from '@ui/text/secondary'
import Image from 'next/future/image'
import { ReactNode } from 'react'

export type TechIconProps = {
  title: string
  description: string
  href: string
  image: string
  background: string
}

export type TechIconPropsArr = {
  [key: string]: TechIconProps[]
}

export type TechStackColorSchemaProps = {
  background: string
  color: string
  icon: ReactNode
}

export type TechStackColorSchemaPropsArr = {
  [key: string]: TechStackColorSchemaProps
}

const TechIcon = ({
  title,
  description,
  href,
  image,
  background
}: TechIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="ease-[spring(1 100 10 10)] rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-dark-500 dark:bg-dark-600"
    >
      <div className="flex flex-row gap-4">
        <div className="relative overflow-hidden p-2">
          <div
            style={{ backgroundColor: background }}
            className="absolute inset-0 h-[52px] w-[52px] rounded-md opacity-20"
          ></div>
          <Image
            src={image}
            alt={`${title} logo`}
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <SecondaryText className="text-sm">{description}</SecondaryText>
        </div>
      </div>
    </a>
  )
}

export default TechIcon
