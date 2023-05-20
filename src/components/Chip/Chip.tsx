import React from 'react'

import * as S from './Chip.styles'

// -------------------------------------------------------------

type Props = {
  label: string
  icon: string
}

// -------------------------------------------------------------

export const Chip = ({ label, icon }: Props) => {
  return (
    <S.Container>
      <S.Icon src={icon} alt={label} />
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
