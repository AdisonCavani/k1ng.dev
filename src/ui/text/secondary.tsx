import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string | undefined
}

const SecondaryText = ({ children, className }: Props) => {
  return (
    <div className={`text-neutral-600 dark:text-neutral-400/80 ${className}`}>
      {children}
    </div>
  )
}

export default SecondaryText
