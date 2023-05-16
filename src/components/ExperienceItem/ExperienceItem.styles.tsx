import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled(motion.li)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #161616;
  padding: 2.4rem;
  border-radius: 0.2rem;

  &::before {
    position: absolute;
    content: '';
    width: 2.4rem;
    height: 2.4rem;
    background-color: #161616;
    transform: rotate(45deg);
    border-radius: 0 0 0 0.2rem;
  }

  &:nth-child(even)::before {
    top: 2.4rem;
    left: -1.2rem;
  }

  &:nth-child(odd)::before {
    top: 2.4rem;
    left: -1.2rem;

    @media ${({ theme }) => theme.breakpoints.lg} {
      top: 2.4rem;
      left: calc(100% - 1.2rem);
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }

  &:nth-child(even)::after {
    top: 3rem;
    left: -3.12rem;
  }

  &:nth-child(odd)::after {
    top: 3rem;
    left: -3.12rem;

    @media ${({ theme }) => theme.breakpoints.lg} {
      top: 3rem;
      left: calc(100% + 2.4rem + 0.24rem / 2);
      transform: translateX(-50%);
    }
  }
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
`

export const Company = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;
`

export const MetaInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }

  span {
    display: none;
    line-height: 1;

    @media ${({ theme }) => theme.breakpoints.md} {
      display: block;
      color: rgba(159, 159, 159, 0.5);
    }
  }
`

export const Location = styled.h5`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
`

export const Date = styled.h6`
  color: rgba(159, 159, 159, 0.5);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
`

export const Description = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-left: 2.4rem;
  height: 100%;
`

export const DescriptionItem = styled.li`
  font-size: 1.4rem;
  font-weight: 400;
  /* line-height: 1.4; */

  ::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.25s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`
