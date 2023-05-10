import React, { MouseEventHandler } from 'react'
// @styles
import * as S from './Button.styles'

type Props = {
	children: React.ReactNode
	as?: string | React.ComponentType<any>
	href?: string
	variant?: 'solid' | 'outline' | 'text'
	isCardButton?: boolean
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
	isCardButton,
}: Props) => {
	return (
		<S.Button
			as={as}
			href={href}
			$variant={variant}
			$isCardButton={isCardButton}
			onClick={onClick}
			target='_blank'
			rel='noopener noreferrer'
		>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</S.Button>
	)
}
