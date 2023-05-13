import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { getIcons } from '@utils'

import * as S from './Contacts.styles'

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
              link: string | null
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
                  link
                }
              }
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, info_items } = data.allPages.edges[0].node.contact_section.contact_info

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      {info_items.map((item, index) => {
        const { title, value, icon_name, link } = item
        return (
          <S.InfoItem key={title}>
            <S.Icon>{getIcons(icon_name)}</S.Icon>
            <S.Info>
              <S.InfoTitle>{title}</S.InfoTitle>
              {link ? (
                <S.InfoValue>
                  <a href={link}>{value}</a>
                </S.InfoValue>
              ) : (
                <S.InfoValue>{value}</S.InfoValue>
              )}
            </S.Info>
          </S.InfoItem>
        )
      })}
    </S.Container>
  )
}
