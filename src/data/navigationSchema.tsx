import { IconBrandGithub } from '@tabler/icons'
import { NavbarLinkProps } from '@components/navbar'

const NavigationSchema: NavbarLinkProps[] = [
  {
    href: 'https://github.com/AdisonCavani/adisoncavani.github.io',
    label: 'Source',
    icon: <IconBrandGithub size={16} />
  }
]

export default NavigationSchema
