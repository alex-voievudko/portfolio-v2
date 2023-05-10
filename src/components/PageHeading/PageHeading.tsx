import React from 'react'
// @styles
import * as S from './PageHeading.styles'
// @components
import { Container } from '@components/Container/Container'
// @animations
import { fadeInUp, width } from '@animations'

type Props = {
	title: string
	description: string
}

export const PageHeading = ({ title, description }: Props) => {
	return (
		<S.Section>
			<Container>
				<S.Wrapper>
					<S.Description variants={fadeInUp}>{description}</S.Description>
					<S.TitleWrapper variants={fadeInUp}>
						<S.Title>{title}</S.Title>
						<S.AnimatedBar variants={width} initial='hidden' animate='show' />
					</S.TitleWrapper>
				</S.Wrapper>
			</Container>
		</S.Section>
	)
}
