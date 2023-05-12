import React from 'react'

import { Container, Form } from '@components'

import * as S from './ContactSection.styles'

// -------------------------------------------------------------

export const ContactSection = () => {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.FormWrapper>
            <Form />
          </S.FormWrapper>
          <S.ContentWrapper></S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
