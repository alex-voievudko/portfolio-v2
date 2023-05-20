import React from 'react'

import { FiExternalLink, FiGithub } from 'react-icons/fi'

import { fadeInUp } from '@animations'
import { Button, Video, Chip } from '@components'
import { convertDate } from '@utils'

import * as S from './ProjectCard.styles'

// -------------------------------------------------------------

type Props = {
  project: {
    title: string
    description: string
    release_date: string
    technologies: {
      label: string
      icon: {
        svg: {
          dataURI: string
        }
      }
    }[]
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
        <S.ReleaseDate>Released: {convertDate(project.release_date)}</S.ReleaseDate>
        <S.Description>{description}</S.Description>
        <S.ButtonsWrapper>
          <Button variant="solid" isCardButton href={live} leftIcon={<FiExternalLink />}>
            Live
          </Button>
          <Button variant="outline" isCardButton href={github} disabled={!github} leftIcon={<FiGithub />}>
            Github
          </Button>
        </S.ButtonsWrapper>

        <S.Divider />
        <S.ChipsWrapper>
          {technologies.map((technology) => (
            <Chip key={technology.label} label={technology.label} icon={technology.icon.svg.dataURI} />
          ))}
        </S.ChipsWrapper>
      </S.Content>
    </S.Container>
  )
}
