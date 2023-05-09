import React from 'react'
// @fremer-motion
import { useIsPresent } from 'framer-motion'
// @styles
import * as S from './Overlay.styles'
// @svgs
import Meteor from '../../assets/images/meteor.inline.svg'

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
