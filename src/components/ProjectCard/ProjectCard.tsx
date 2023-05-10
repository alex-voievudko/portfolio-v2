import React, { useRef } from 'react'
// @styles
import * as S from './ProjectCard.styles'
// @components
import { Video } from '../Video/Video'
import { Button } from '../Button/Button'
// @icons
import { FiExternalLink, FiGithub } from 'react-icons/fi'
// @animations
import { fadeInUp } from '@animations'

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

export const ProjectCard = ({ project }: Props) => {
	const { title, description, technologies, video, github, live } = project

	return (
		<S.Container variants={fadeInUp}>
			<Video source={video.publicURL} />
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
				<S.ButtonsWrapper>
					<Button
						variant='solid'
						isCardButton
						href={live}
						leftIcon={<FiExternalLink />}
					>
						Demo
					</Button>
					<Button
						variant='outline'
						isCardButton
						href={github}
						leftIcon={<FiGithub />}
					>
						Github
					</Button>
				</S.ButtonsWrapper>
				<S.Divider />
			</S.Content>
		</S.Container>
	)
}
