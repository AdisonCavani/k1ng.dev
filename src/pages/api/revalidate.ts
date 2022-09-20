import type { NextApiRequest, NextApiResponse } from 'next'
import { SanityClient } from '@lib/sanityServer'
import { postUpdatedQuery } from '@lib/queries'
import { isValidRequest } from '@sanity/webhook'

const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // This isn't working yet - not sure why
  if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: 'Invalid request' })
  }

  const { _id: id } = req.body
  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' })
  }

  try {
    const slug = await SanityClient.fetch(postUpdatedQuery, { id })
    await Promise.all([
      res.revalidate('/blog'),
      res.revalidate(`/blog/${slug}`)
    ])
    return res.status(200).json({ message: `Updated ${slug}` })
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }
}
