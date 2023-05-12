import React, { useState, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

import { toTopButton, toTopButtonIcon } from '@animations'

import * as S from './ScrollToTop.styles'

// -------------------------------------------------------------

type Props = {
  offset: number
}

// -------------------------------------------------------------

export const ScrollToTop = ({ offset }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > offset) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (offset) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleClick)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <S.Container
          key="scroll-to-top"
          variants={toTopButton}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={handleClick}
        >
          <motion.span variants={toTopButtonIcon} animate="show">
            <FiArrowUp />
          </motion.span>
        </S.Container>
      )}
    </AnimatePresence>
  )
}
