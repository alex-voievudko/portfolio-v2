import { motion } from 'framer-motion'
import styled from 'styled-components'

import { SectionTitle } from '@components'

// -------------------------------------------------------------

export const Section = styled.section`
  width: 100%;
  padding-bottom: 7rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled(SectionTitle)`
  margin-top: 0;
  margin-bottom: 5rem;
`

export const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 1.6rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`

export const RecommendationsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;
`

export const CarouselWrapper = styled(motion.div)`
  width: 100%;
  padding-bottom: 4.8rem;

  & .slider-control-bottomcenter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -4.8rem;

    .carousel-paging-dots-container {
      top: 0 !important;
      gap: 0.8rem;
    }

    .carousel-paging-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 2.4rem;
      height: 2.4rem;
      border: 3px solid ${({ theme }) => theme.colors.primary} !important;
      border-radius: 50%;
      background-color: transparent !important;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      .paging-dot {
        width: 0.8rem;
        height: 0.8rem;
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
