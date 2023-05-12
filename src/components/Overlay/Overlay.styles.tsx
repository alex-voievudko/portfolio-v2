import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  transform: translateY(100%);
  z-index: 99999;
`
