import styled from 'styled-components'

import { ContentTitle } from '../Typography/Typography'

// -------------------------------------------------------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(ContentTitle)`
  margin-bottom: 14px;
`

export const Subtitle = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 1.6rem;
  }
`

export const Icon = styled.div`
  width: 4.4rem;
  min-width: 4.4rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #777777;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 5.6rem;
    height: 5.6rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Info = styled.div`
  height: 4.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const InfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.4rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: 0.8rem;
  }
`

export const InfoValue = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.2;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
