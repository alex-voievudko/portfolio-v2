import React from 'react'

import { FiExternalLink, FiGithub } from 'react-icons/fi'

import { fadeInUp } from '@animations'
import { Button, Video } from '@components'

import * as S from './ProjectCard.styles'

// -------------------------------------------------------------

type Props = {
  project: {
    title: string
    description: string
    technologies: string[]
    video: {
      publicURL: string
    }
    github: string
    live: string
  }
}

// -------------------------------------------------------------

export const ProjectCard = ({ project }: Props) => {
  const { title, description, technologies, video, github, live } = project

  return (
    <S.Container variants={fadeInUp}>
      <Video source={video.publicURL} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ButtonsWrapper>
          <Button variant="solid" isCardButton href={live} leftIcon={<FiExternalLink />}>
            Live
          </Button>
          <Button variant="outline" isCardButton href={github} disabled={!github} leftIcon={<FiGithub />}>
            Github
          </Button>
        </S.ButtonsWrapper>
        <div>
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
        <S.Divider />
      </S.Content>
    </S.Container>
  )
}
