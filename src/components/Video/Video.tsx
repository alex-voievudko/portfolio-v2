import React, { useRef } from 'react'

import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import * as S from './Video.styles'

type Props = {
  source: string
}

export const Video = ({ source }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const breakpoints = useBreakpoint()
  const isLaptop = breakpoints.lg

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
        {...(!isLaptop && {
          autoPlay: true,
        })}
        loop
        muted
        controls={false}
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={source} type="video/mp4" />
      </video>
    </S.Container>
  )
}
