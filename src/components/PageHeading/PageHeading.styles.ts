import { motion } from 'framer-motion'
import styled, { keyframes, Keyframes } from 'styled-components'

import { SectionTitle } from '../Typography/Typography'

// -------------------------------------------------------------

const barAnimation: Keyframes = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(8.4rem);
	}
`

export const Section = styled.section``
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.6rem;
  padding-bottom: 8.2rem;
`

export const TitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled(SectionTitle)`
  margin-top: 0;
  margin-bottom: 3.6rem;
`

export const Description = styled(motion.p)`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`

export const AnimatedBar = styled(motion.div)`
  position: relative;
  display: block;
  width: 7.2rem;
  height: 0.4rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before,
  &::after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.colors.background};
    height: 100%;
    width: 4px;
    top: 0;
    animation-name: ${barAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 2.2s;
  }

  &::before {
    left: -0.4rem;
  }

  &::after {
    left: -1.2rem;
  }
`
