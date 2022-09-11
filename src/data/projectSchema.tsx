import { ProjectCardProps } from '@components/projectCard'
import Link from '@ui/text/link'
import { useTheme } from 'next-themes'

import DistroGrubThemesImage from '@images/distro-grub-themes.webp'
import DistroGrubThemesImageDark from '@images/distro-grub-themes-dark.webp'
import WebsiteImage from '@images/adison-me.webp'
import WebsiteImageDark from '@images/adison-me-dark.webp'
import RsaWpfImage from '@images/rsa-wpf.webp'
import RsaWpfImageDark from '@images/rsa-wpf-dark.webp'

const ProjectSchema = () => {
  const { resolvedTheme } = useTheme()

  return new Array<ProjectCardProps>(
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
      img: resolvedTheme === 'light' ? WebsiteImage : WebsiteImageDark,
      priority: true
    },
    {
      title: 'distro-grub-themes',
      desc: 'A pack of GRUB2 themes for different Linux distributions and OSs. It aims to replace the default GRUB look, with a nice and colorful theme.',
      lang: 'CI & CD',
      color: 'violet',
      img:
        resolvedTheme === 'light'
          ? DistroGrubThemesImage
          : DistroGrubThemesImageDark,
      githubUrl: 'https://github.com/AdisonCavani/distro-grub-themes',
      externalUrl: 'https://github.com/AdisonCavani/distro-grub-themes'
    },
    {
      title: 'RSA-WPF',
      desc: ' Application let user to encrypt, decrypt and generate key pair using RSA asymetric encryption. Written in WPF using .NET 5.',
      lang: 'C#',
      color: 'green',
      img: resolvedTheme === 'light' ? RsaWpfImage : RsaWpfImageDark,
      githubUrl: 'https://github.com/AdisonCavani/RSA-WPF',
      externalUrl: 'https://github.com/AdisonCavani/RSA-WPF'
    }
  )
}

export default ProjectSchema
