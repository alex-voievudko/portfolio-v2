import React from 'react'

import * as S from './Toast.styles'

// -------------------------------------------------------------

type Props = {
  variant: 'success' | 'error'
  show: boolean
}

// -------------------------------------------------------------

export const Toast = ({ variant, show }: Props) => {
  const message = variant === 'success' ? 'Message sent successfully!' : 'An error occurred. Please try again.'
  return (
    <S.Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.25 }}
      $variant={variant}
    >
      <S.Message $variant={variant}>{message}</S.Message>
    </S.Container>
  )
}
