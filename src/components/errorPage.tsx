import Link from 'next/link'

export type ErrorPageProps = {
  number: number
  title: string
  description: string
}

const ErrorPage = ({ number, title, description }: ErrorPageProps) => {
  return (
    <div className="py-10">
      <div className="mb-10 text-center text-9xl font-black text-neutral-200">
        {number}
      </div>
      <h1 className="text-center text-4xl font-black">{title}</h1>
      <p className="m-auto my-8 max-w-lg text-center text-lg text-gray-600">
        {description}
      </p>
      <div className="flex justify-center">
        <Link href="/" passHref>
          <button className="rounded px-4 py-3 font-semibold text-blue-500 hover:bg-blue-100">
            Take me back to home page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
