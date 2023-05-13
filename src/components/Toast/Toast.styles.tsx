import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled(motion.div)<{ $success?: boolean }>`
  position: fixed;
  bottom: 1.6rem;
  right: 2.4rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.overlay};
  padding: 1rem;
  border: 1px solid ${({ theme, $success }) => ($success ? theme.colors.success : theme.colors.error)};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.2);

  > * + * {
    margin-top: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    bottom: 2.4rem;
    right: 2.4rem;
  }
`

export const Message = styled.p<{ $success?: boolean }>`
  color: ${({ theme, $success }) => ($success ? theme.colors.success : theme.colors.error)};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  text-align: right;
`
