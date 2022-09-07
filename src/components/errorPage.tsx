import Link from 'next/link'

export type ErrorPageProps = {
  number: number
  title: string
  description: string
}

const ErrorPage = ({ number, title, description }: ErrorPageProps) => {
  return (
    <div className="py-10">
      <div className="font-black text-9xl text-center mb-10 text-neutral-200">
        {number}
      </div>
      <h1 className="text-center font-black text-4xl">{title}</h1>
      <p className="text-center m-auto max-w-lg my-8 text-lg text-gray-600">
        {description}
      </p>
      <div className="flex justify-center">
        <Link href="/" passHref>
          <button className="font-semibold text-blue-500 hover:bg-blue-100 px-4 py-3 rounded">
            Take me back to home page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
