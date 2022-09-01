import { ProjectCardProps } from '@components/projectCard'
import { Text } from '@mantine/core'
import DistroGrubThemesImage from '@images/distro-grub-themes.webp'
import WebsiteDark from '@images/adison-me-dark.webp'
import RsaWpfImage from '@images/rsa-wpf.webp'

const ProjectSchema: ProjectCardProps[] = [
  {
    title: 'adison.me',
    desc: (
      <Text>
        My personal website. Built with{' '}
        <Text
          variant="link"
          component="a"
          href="https://nextjs.org"
          target="_blank"
        >
          Next.js
        </Text>
        , deployed to{' '}
        <Text
          variant="link"
          component="a"
          href="https://vercel.com"
          target="_blank"
        >
          Vercel
        </Text>
        . Uses self-hosted{' '}
        <Text
          variant="link"
          component="a"
          href="https://adison.me/analytics"
          target="_blank"
        >
          plausible analytics
        </Text>{' '}
        on{' '}
        <Text
          variant="link"
          component="a"
          href="https://cloud.google.com/compute"
          target="_blank"
        >
          GCP Compute Engine
        </Text>
      </Text>
    ),

    lang: 'TypeScript',
    color: 'blue',
    githubUrl: 'https://github.com/AdisonCavani/adison.me',
    externalUrl: 'https://adison.me',
    img: WebsiteDark
  },
  {
    title: 'distro-grub-themes',
    desc: 'A pack of GRUB2 themes for different Linux distributions and OSs. It aims to replace the default GRUB look, with a nice and colorful theme.',
    lang: 'CI & CD',
    color: 'violet',
    img: DistroGrubThemesImage,
    githubUrl: 'https://github.com/AdisonCavani/distro-grub-themes',
    externalUrl: 'https://github.com/AdisonCavani/distro-grub-themes'
  },
  {
    title: 'RSA-WPF',
    desc: 'Application let user to encrypt, decrypt and generate key pair using RSA asymetric encryption. Written in WPF using .NET 5.',
    lang: 'C#',
    color: 'green',
    img: RsaWpfImage,
    githubUrl: 'https://github.com/AdisonCavani/RSA-WPF',
    externalUrl: 'https://github.com/AdisonCavani/RSA-WPF'
  }
]

export default ProjectSchema
