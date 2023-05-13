import React from 'react'

import { fadeInFromLeft100, fadeInFromRight100 } from '@animations'
import { Container, Form, Contacts } from '@components'

import * as S from './ContactSection.styles'

// -------------------------------------------------------------

export const ContactSection = () => {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.FormWrapper variants={fadeInFromLeft100}>
            <Form />
          </S.FormWrapper>
          <S.ContentWrapper variants={fadeInFromRight100}>
            <Contacts />
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
