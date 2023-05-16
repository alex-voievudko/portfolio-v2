import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.cardTitle};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  margin: 0px;
`

export const Icon = styled(motion.img)`
  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 0.8rem;
`
