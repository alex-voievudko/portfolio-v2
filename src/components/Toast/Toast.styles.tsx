import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled(motion.div)<{ $variant: 'success' | 'error' }>`
  position: fixed;
  top: 9.2rem;
  right: 2.4rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.overlay};
  padding: 1rem;
  border: 1px solid ${({ theme, $variant }) => ($variant === 'success' ? theme.colors.success : theme.colors.error)};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.2);

  > * + * {
    margin-top: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    top: 9.2rem;
    right: 2.4rem;
  }
`

export const Message = styled.p<{ $variant: 'success' | 'error' }>`
  color: ${({ theme, $variant }) => ($variant === 'success' ? theme.colors.success : theme.colors.error)};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4;
  text-align: right;
`
