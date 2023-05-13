import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Section = styled.section`
  position: relative;
  padding-bottom: 7rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.2rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 4.8rem;
  }
`

export const FormWrapper = styled(motion.div)``

export const ContentWrapper = styled(motion.div)``
