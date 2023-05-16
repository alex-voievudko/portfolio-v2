import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

import { ContentTitle } from '@components'

const changeHeight = keyframes`
  from {
    height: 0;
  }
  to {
    height: calc(100% - 3.6rem);
  }
`

// -------------------------------------------------------------

export const Section = styled.section`
  padding-bottom: 7rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

export const Title = styled(ContentTitle)`
  margin-bottom: 1.4rem;
`

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
`

export const Education = styled.div`
  display: flex;
  flex-direction: column;
`

export const ExperienceWrapper = styled(motion.ul)`
  display: grid;
  grid-template-columns: 0.24rem 1fr;
  grid-auto-columns: max-content;
  gap: 2.4rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr 0.24rem 1fr;
    column-gap: 2.4rem;
    row-gap: 4.8rem;
  }

  & > * {
    grid-column: 2;
    grid-row: span 2;

    @media ${({ theme }) => theme.breakpoints.lg} {
      &:nth-child(odd) {
        grid-column: 1;
      }

      &:nth-child(even) {
        grid-column: 3;
      }

      &:nth-child(2) {
        grid-row: 2 / 4;
      }
    }
  }

  &::before {
    content: '';
    grid-column: 1;
    grid-row: 1 / span 12;
    width: 0.24rem;
    height: 0;
    margin-top: 3.6rem;
    background-color: ${({ theme }) => theme.colors.primary};
    animation: ${changeHeight} 1.8s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.25s;

    @media ${({ theme }) => theme.breakpoints.lg} {
      grid-column: 2;
      grid-row: 1 / span 7;
    }
  }
`
