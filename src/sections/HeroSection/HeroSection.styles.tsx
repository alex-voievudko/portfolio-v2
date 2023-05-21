import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Background = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  img {
    object-fit: cover !important;
    object-position: top right !important;

    @media ${({ theme }) => theme.breakpoints.lg} {
      object-position: top center !important;
    }
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Title = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 2.4rem 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(32px, 3vw, 48px);
  font-weight: 700;
  letter-spacing: 1;
  line-height: 1.2;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: clamp(48px, 4vw, 70px);
    margin: 0 0 3.2rem 0;
  }
`

export const Subtitle = styled(motion.h2)`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 500;
  letter-spacing: 0.03rem;
  line-height: 1;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: clamp(26px, 2.5vw, 32px);
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ButtonsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    width: 41rem;
  }
`

export const FixedSocialLinks = styled(motion.div)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    position: absolute;
    z-index: 2;
    display: block;
    right: 4.8rem;
    bottom: 4.8rem;
  }
`
