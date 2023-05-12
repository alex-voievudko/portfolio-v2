import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { Container, ProjectCard } from '@components'

import * as S from './ProjectsSection.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        projects_section: {
          projects: {
            title: string
            description: string
            technologies: string[]
            live: string
            github: string
            video: {
              publicURL: string
            }
          }[]
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const ProjectsSection = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "portfolio-page" } }) {
        edges {
          node {
            projects_section {
              projects {
                title
                description
                technologies
                live
                github
                video {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)
  const { projects } = data.allPages.edges[0].node.projects_section

  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
