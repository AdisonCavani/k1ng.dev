import SiteMetadata from '@data/siteMetadata'
import { Fragment } from 'react'
import NextLink from 'next/link'

type FooterProps = {
  links: FooterLinkProps[]
}

export type FooterLinkProps = {
  href: string
  label: string
}

const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 dark:border-slate-200/10 py-10">
        <p className="text-center text-sm leading-6 text-slate-600 dark:text-neutral-400">
          © {new Date().getFullYear()} {SiteMetadata.author}. All rights
          reserved.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700 dark:text-neutral-300">
          {links.map(({ href, label }, index) => (
            <Fragment key={index}>
              {href.startsWith('/') ? (
                <>
                  <NextLink href={href}>{label}</NextLink>
                  {index !== links.length - 1 && (
                    <div className="h-4 w-px bg-slate-500/20 dark:bg-neutral-50/20" />
                  )}
                </>
              ) : (
                <>
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                  {index !== links.length - 1 && (
                    <div className="h-4 w-px bg-slate-500/20 dark:bg-neutral-50/20" />
                  )}
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  )
}

{
  /* <div className="h-4 w-px bg-slate-500/20" /> */
}

export default Footer
