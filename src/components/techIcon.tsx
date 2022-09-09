import Image from 'next/image'

export type TechIconProps = {
  title: string
  description: string
  href: string
  image: string
  background: string
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
      className="border rounded-lg border-neutral-300 p-4 border-opacity-75 transition-all duration-200 ease-[spring(1 100 10 10)] hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-row gap-4">
        <div className="relative overflow-hidden p-2">
          <div
            style={{ backgroundColor: background }}
            className="absolute w-[52px] h-[52px] opacity-20 rounded-md inset-0"
          ></div>
          <Image
            src={image}
            alt={`${title} logo`}
            width={36}
            height={36}
            className="w-9 h-9 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="text-[14px] text-neutral-600">{description}</p>
        </div>
      </div>
    </a>
  )
}

export default TechIcon
