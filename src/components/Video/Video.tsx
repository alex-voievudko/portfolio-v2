import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
// @styles
import * as S from './Video.styles'

type Props = {
	source: string
}

export const Video = ({ source }: Props) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const isLaptop = useMediaQuery({ query: '(min-width: 992px)' })

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play()
		}
	}

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause()
		}
	}

	return (
		<S.Container>
			<video
				// autoplay for mobile only
				autoPlay={!isLaptop}
				loop
				muted
				controls={false}
				ref={videoRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<source src={source} type='video/mp4' />
			</video>
		</S.Container>
	)
}
