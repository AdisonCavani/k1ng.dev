import Image from 'next/future/image'
import AvatarImage from '@images/avatar.webp'

const Introduction = () => {
  return (
    <div className="flex max-w-2xl flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
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
      <div className="relative mb-8 mr-auto w-[80px] rounded-full border-2 dark:border-neutral-500 sm:mb-0 sm:w-[176px]">
        <Image
          src={AvatarImage}
          alt="Adison Cavani"
          width={176}
          height={176}
          sizes="20vw"
          priority
        />
      </div>
    </div>
  )
}

export default Introduction
