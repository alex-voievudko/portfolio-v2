import { graphql, useStaticQuery } from 'gatsby'

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

export const useSiteMetadata = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
