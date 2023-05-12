import * as React from 'react'

import type { HeadFC } from 'gatsby'
import { graphql } from 'gatsby'

import { PageHeading, Seo } from '@components'
import { Layout } from '@layouts'
import { ProjectsSection } from '@sections'

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

const PortfolioPage = () => {
  return (
    <Layout>
      <PageHeading title="Portfolio" description="Here you can find some of my projects" />
      <ProjectsSection />
    </Layout>
  )
}

export default PortfolioPage

// Page Query
export const query = graphql`
  query {
    allPages(filter: { page_id: { eq: "portfolio-page" } }) {
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
