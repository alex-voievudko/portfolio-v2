import React from 'react'

import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { fadeInUp, fadeInFromRight100, fadeInFromLeft100 } from '@animations'
import { Container, ExperienceItem } from '@components'

import * as S from './ExperienceSection.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        experience_section: {
          experience_title: string
          experience: {
            title: string
            company: string
            location: string
            start_date: string
            end_date: string
            description: string[]
          }[]
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const ExperienceSection = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "resume-page" } }) {
        edges {
          node {
            experience_section {
              experience_title
              experience {
                title
                company
                location
                start_date
                end_date
                description
              }
            }
          }
        }
      }
    }
  `)

  const { lg } = useBreakpoint()

  const { experience_title, experience } = data.allPages.edges[0].node.experience_section

  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.Experience>
            <S.Title variants={fadeInUp}>{experience_title}</S.Title>
            <S.ExperienceWrapper>
              {experience.map((item, index) => (
                <ExperienceItem key={item.title} {...item} index={index} />
              ))}
            </S.ExperienceWrapper>
          </S.Experience>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
