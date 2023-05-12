import styled from 'styled-components'

// -------------------------------------------------------------

export const Section = styled.section`
  margin-bottom: 7rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`
