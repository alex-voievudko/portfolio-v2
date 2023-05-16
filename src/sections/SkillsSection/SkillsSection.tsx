import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { fadeInUp } from '@animations'
import { Container, SkillItem } from '@components'

import * as S from './SkillsSection.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        skills_section: {
          title: string
          subtitle: string
          skills: {
            name: string
            icon: {
              svg: {
                dataURI: string
              }
            }
          }[]
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const SkillsSection = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "resume-page" } }) {
        edges {
          node {
            skills_section {
              title
              subtitle
              skills {
                name
                icon {
                  svg {
                    dataURI
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, skills } = data.allPages.edges[0].node.skills_section
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.Subtitle variants={fadeInUp}>{subtitle}</S.Subtitle>
          <S.Title variants={fadeInUp}>{title}</S.Title>
          <S.SkillsWrapper variants={fadeInUp}>
            {skills.map((skill) => (
              <SkillItem key={skill.name} title={skill.name} icon={skill.icon.svg.dataURI} />
            ))}
          </S.SkillsWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
