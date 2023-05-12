import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        contact_section: {
          contact_info: {
            title: string
            subtitle: string
            info_items: {
              title: string
              value: string
              icon_name: string
            }[]
          }
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const Contacts = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "contact-page" } }) {
        edges {
          node {
            contact_section {
              contact_info {
                title
                subtitle
                info_items {
                  title
                  value
                  icon_name
                }
              }
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, info_items } = data.allPages.edges[0].node.contact_section.contact_info

  return <div>Contacts</div>
}
