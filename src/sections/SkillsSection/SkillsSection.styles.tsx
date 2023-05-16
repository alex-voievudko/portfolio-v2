import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ContentTitle } from '@components'

// -------------------------------------------------------------

export const Section = styled.section`
  position: relative;
  padding-bottom: 7rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(ContentTitle)`
  margin-bottom: 1.4rem;
`

export const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  margin-top: 0px;
  margin-bottom: 1.6rem;
`

export const SkillsWrapper = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.6rem;
  list-style: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(8, 1fr);
  }
`
