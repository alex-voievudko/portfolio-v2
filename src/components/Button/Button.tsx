import React, { MouseEventHandler } from 'react'

import * as S from './Button.styles'

// -------------------------------------------------------------

type Props = {
  children: React.ReactNode
  as?: string | React.ComponentType<any>
  href?: string
  variant?: 'solid' | 'outline' | 'text'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isCardButton?: boolean
  rightIcon?: JSX.Element
  leftIcon?: JSX.Element
  onClick?: MouseEventHandler<HTMLButtonElement>
}

// -------------------------------------------------------------

export const Button = ({
  children,
  as = 'a',
  href,
  variant = 'solid',
  onClick,
  rightIcon,
  leftIcon,
  isCardButton,
  disabled,
  type,
}: Props) => {
  return (
    <S.Button
      as={as}
      {...(as === 'a' && { href })}
      $variant={variant}
      $isCardButton={isCardButton}
      disabled={disabled}
      onClick={onClick}
      {...(type && { type })}
      {...(as === 'a' && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </S.Button>
  )
}
