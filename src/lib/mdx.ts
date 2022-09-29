import { serialize } from 'next-mdx-remote/serialize'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

const mdxToHtml = async (source: string) => {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      format: 'mdx',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // Order matters!
        rehypeCodeTitles,
        rehypePrism
      ]
    }
  })

  return {
    html: mdxSource
  }
}

export default mdxToHtml
