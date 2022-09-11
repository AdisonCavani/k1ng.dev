import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Link = ({ children }: Props) => {
  return (
    <span className="text-[#3A73DC] hover:underline dark:text-blue-400">
      {children}
    </span>
  )
}

export default Link
