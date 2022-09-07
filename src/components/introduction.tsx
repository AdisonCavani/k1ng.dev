import Image from 'next/image'
import AvatarImage from '@images/avatar.webp'

const Introduction = () => {
  return (
    <div className="flex flex-col-reverse items-start max-w-2xl sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-4xl tracking-tight mb-2">
          Adison Cavani
        </h1>
        <h2 className="mb-4">
          Full-stack Developer, <span className="font-semibold">student</span>
        </h2>
        <p className="mb-4">
          .NET Backend Developer. Currently learning web development - cloud,
          serverless and React w/ Next.js.
        </p>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          src={AvatarImage}
          alt="Adison Cavani"
          width={176}
          height={176}
          sizes="30vw"
          priority
        />
      </div>
    </div>
  )
}

export default Introduction
