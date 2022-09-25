type Props = {
  name: string
}

const PostCategory = ({ name }: Props) => {
  return (
    <span className="inline-flex items-center rounded bg-gray-300 dark:bg-dark-800/40 text-gray-800 dark:text-gray-100 px-2 py-1 text-xs font-medium">
      {name}
    </span>
  )
}

export default PostCategory
