import type { NextApiRequest, NextApiResponse } from 'next'
import { SanityClient } from '@lib/sanityServer'
import { postUpdatedQuery } from '@lib/queries'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = await readBody(req) // Read the body into a string
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  const jsonBody = JSON.parse(body)
  const { _id: id } = jsonBody

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

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false
  }
}

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}
