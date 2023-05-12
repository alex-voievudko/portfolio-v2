import * as React from 'react'

import type { HeadFC } from 'gatsby'
import { graphql } from 'gatsby'

import { PageHeading, Seo } from '@components'
import { Layout } from '@layouts'
import { ContactSection } from '@sections'

type Data = {
  allPages: {
    edges: {
      node: {
        title: string
        description: string
        page_url: string
      }
    }[]
  }
}

const ContactPage = () => {
  return (
    <Layout>
      <PageHeading title="Get in Touch" description="Feel free to contact me anytimes" />
      <ContactSection />
    </Layout>
  )
}

export default ContactPage

// Page Query
export const query = graphql`
  query {
    allPages(filter: { page_id: { eq: "contact-page" } }) {
      edges {
        node {
          title
          description
          page_url
        }
      }
    }
  }
`

export const Head: HeadFC<Data> = ({ data }) => {
  const { title, description, page_url } = data.allPages.edges[0].node
  return (
    <>
      <Seo title={title} description={description} pathname={page_url} />
    </>
  )
}
