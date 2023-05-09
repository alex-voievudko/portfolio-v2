import React, { MouseEventHandler } from 'react'
// @styles
import * as S from './Button.styles'

type Props = {
	children: React.ReactNode
	as?: string | React.ComponentType<any>
	href?: string
	variant?: 'solid' | 'outline' | 'text'
	rightIcon?: JSX.Element
	leftIcon?: JSX.Element
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
	children,
	as = 'a',
	href,
	variant = 'solid',
	onClick,
	rightIcon,
	leftIcon,
}: Props) => {
	return (
		<S.Button as={as} href={href} $variant={variant} onClick={onClick}>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</S.Button>
	)
}
