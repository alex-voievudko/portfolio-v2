import React from 'react'

import { fadeInUp, width } from '@animations'
import { Container } from '@components'

import * as S from './PageHeading.styles'

// -------------------------------------------------------------

type Props = {
  title: string
  description: string
}

// -------------------------------------------------------------

export const PageHeading = ({ title, description }: Props) => {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.Description variants={fadeInUp}>{description}</S.Description>
          <S.TitleWrapper variants={fadeInUp}>
            <S.Title>{title}</S.Title>
            <S.AnimatedBar variants={width} initial="hidden" animate="show" />
          </S.TitleWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
