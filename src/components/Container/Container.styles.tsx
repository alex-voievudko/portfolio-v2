import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled.div<{ $fullHeight: boolean }>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  width: calc(100% - 3.2rem);
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : 'auto')};

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 57.6rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 76.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 99.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 120rem;
  }
`
