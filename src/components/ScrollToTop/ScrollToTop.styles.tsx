import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled(motion.button)`
  position: fixed;
  bottom: 3.2rem;
  right: 2.4rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.overlay};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    bottom: 3.2rem;
    right: 3.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    bottom: 4.8rem;
    right: 4.8rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.white};
    stroke-width: 3px;
  }
`
