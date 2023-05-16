import React from 'react'

import * as S from './SkillItem.styles'

// -------------------------------------------------------------

type Props = {
  title: string
  icon: string
}

// -------------------------------------------------------------

export const SkillItem = ({ title, icon }: Props) => {
  return (
    <S.Container>
      <S.Icon src={icon} alt={title} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
