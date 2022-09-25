import { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

const MDXComponents: MDXComponents = {
  a: props => <CustomLink {...props} />
}

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const href = props.href
  const isExternal = href && (href.startsWith('/') || href.startsWith('#'))

  if (isExternal)
    return (
      <NextLink href={href}>
        <a {...props}>{props.children}</a>
      </NextLink>
    )

  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {props.children}
    </a>
  )
}

export default MDXComponents
