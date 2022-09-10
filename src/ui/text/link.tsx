import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Link = ({ children }: Props) => {
  return (
    <span className="text-blue-500 hover:underline dark:text-blue-400">
      {children}
    </span>
  )
}

export default Link
