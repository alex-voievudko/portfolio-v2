import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  align-items: center;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid #333333;
  height: 3.2rem;
  padding: 0 1.2rem 0 0.2rem;
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  justify-self: center;
`

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
`
