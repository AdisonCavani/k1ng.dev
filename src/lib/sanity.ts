// @ts-nocheck
import createImageUrlBuilder from '@sanity/image-url'
import SanityConfig from './sanityConfig'

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: string) =>
  createImageUrlBuilder(SanityConfig).image(source)
