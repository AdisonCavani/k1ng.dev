import { ProjectCardProps } from '@components/projectCard'
import Link from '@ui/text/link'

import DistroGrubThemesImage from '@images/distro-grub-themes-dark.webp'
import WebsiteImage from '@images/adison-me-dark.webp'
import RsaWpfImage from '@images/rsa-wpf-dark.webp'

const ProjectSchema: Array<ProjectCardProps> = [
  {
    title: 'adison.me',
    desc: (
      <p>
        My personal website. Built with{' '}
        <Link>
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js
          </a>
        </Link>
        , deployed to{' '}
        <Link>
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            Vercel
          </a>
        </Link>
        . Uses self-hosted{' '}
        <Link>
          <a
            href="https://adison.me/analytics"
            target="_blank"
            rel="noreferrer"
          >
            plausible analytics
          </a>
        </Link>{' '}
        on{' '}
        <Link>
          <a
            href="https://cloud.google.com/compute"
            target="_blank"
            rel="noreferrer"
          >
            GCP Compute Engine
          </a>
        </Link>
      </p>
    ),

    lang: 'TypeScript',
    color: 'blue',
    githubUrl: 'https://github.com/AdisonCavani/adison.me',
    externalUrl: 'https://adison.me',
    img: WebsiteImage,
    priority: true
  },
  {
    title: 'distro-grub-themes',
    desc: 'A pack of GRUB2 themes for different Linux distributions and OSs. It aims to replace the default GRUB look, with a nice and colorful theme.',
    lang: 'CI & CD',
    color: 'violet',
    githubUrl: 'https://github.com/AdisonCavani/distro-grub-themes',
    externalUrl: 'https://github.com/AdisonCavani/distro-grub-themes',
    img: DistroGrubThemesImage,
    priority: true
  },
  {
    title: 'RSA-WPF',
    desc: ' Application let user to encrypt, decrypt and generate key pair using RSA asymetric encryption. Written in WPF using .NET 5.',
    lang: 'C#',
    color: 'green',
    githubUrl: 'https://github.com/AdisonCavani/RSA-WPF',
    externalUrl: 'https://github.com/AdisonCavani/RSA-WPF',
    img: RsaWpfImage,
    priority: true
  }
]

export default ProjectSchema
