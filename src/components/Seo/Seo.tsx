import React from 'react'

import { useSiteMetadata } from '@hooks'

type SeoProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

type Props = {
  title?: string
  description?: string
  image?: string
  pathname?: string
}

export const Seo = ({ title, description, image, pathname }: Props) => {
  const { title: defaulTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo: SeoProps = {
    title: title || defaulTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
    </>
  )
}
