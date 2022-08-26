import { IconBrandGithub } from '@tabler/icons'
import { LinkProps } from '@components/navbar'

const NavigationSchema: LinkProps[] = [
  { href: '/contact', label: 'Contact' },
  {
    href: 'https://github.com/AdisonCavani/adisoncavani.github.io',
    label: 'Source',
    icon: <IconBrandGithub size={16} />
  }
]

export default NavigationSchema
