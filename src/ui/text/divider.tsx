type Props = {
  className?: string
}

const Divider = ({ className }: Props) => {
  return (
    <div
      className={`${className} border-t-2 border-neutral-300 dark:border-neutral-700`}
    />
  )
}

export default Divider
