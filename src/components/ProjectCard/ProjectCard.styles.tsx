import { motion } from 'framer-motion'
import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #161616;
  padding: 2rem;
  border-radius: 0.2rem;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  width: 100%;
`

export const Title = styled.h2`
  color: #f3f3f3;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.025rem;
  line-height: 1.2;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1.4rem;
`

export const ReleaseDate = styled.p`
  margin: 0;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #f3f3f3;
  text-align: left;
`

export const Description = styled.p`
  flex: 1;
  margin: 0;
  text-align: left;
  margin-bottom: 2rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  width: 100%;
`

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: #333;
  margin: 2rem 0;
`

export const ChipsWrapper = styled.div`
  flex: 0 0 7.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;
  width: 100%;
`
