import { IconCode } from '@tabler/icons'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/" passHref>
        <span className="inline-flex items-center p-2 pl-0">
          <div className="mr-3 text-blue-500 dark:text-blue-300">
            <IconCode />
          </div>
          <p className="font-bold">Adison Cavani</p>
        </span>
      </Link>
    </div>
  )
}

export default Logo
