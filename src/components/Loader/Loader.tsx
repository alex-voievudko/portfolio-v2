import React from 'react'

import { RotatingSquare, MutatingDots } from 'react-loader-spinner'

import * as S from './Loader.styles'

// -------------------------------------------------------------
export const Loader = () => {
  return (
    <S.Container id="loader">
      <RotatingSquare height="100" width="100" color="#8739fa" ariaLabel="mutating-dots-loading" visible={true} />
    </S.Container>
  )
}
