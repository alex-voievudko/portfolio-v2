import React from 'react'
// @styles
import * as S from './Container.styles'

type Props = {
	children: React.ReactNode
	fullHeight?: boolean
}

export const Container = ({ children, fullHeight = false }: Props) => {
	return <S.Container $fullHeight={fullHeight}>{children}</S.Container>
}
