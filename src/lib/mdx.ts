import { serialize } from 'next-mdx-remote/serialize'

const mdxToHtml = async (source: string) => {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      format: 'mdx'
    }
  })

  return {
    html: mdxSource
  }
}

export default mdxToHtml
