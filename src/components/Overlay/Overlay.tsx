import React from 'react'

import { useIsPresent } from 'framer-motion'

import * as S from './Overlay.styles'

// -------------------------------------------------------------

export const Overlay = () => {
  const isPresent = useIsPresent()
  return (
    <S.Wrapper
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.5, ease: 'linear' },
      }}
      exit={{
        scaleY: 1,
        transition: { duration: 0.5, ease: 'linear' },
      }}
      style={{
        originY: isPresent ? 0 : 1,
      }}
      //
    ></S.Wrapper>
  )
}
