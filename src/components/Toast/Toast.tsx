import React from 'react'

import * as S from './Toast.styles'

// -------------------------------------------------------------

type Props = {
  success?: boolean
  message?: string
  show: boolean
}

// -------------------------------------------------------------

export const Toast = ({ success, message, show }: Props) => {
  return (
    <S.Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.25 }}
      $success={success}
    >
      <S.Message $success={success}>{message}</S.Message>
    </S.Container>
  )
}
