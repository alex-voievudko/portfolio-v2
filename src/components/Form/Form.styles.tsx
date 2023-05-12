import styled from 'styled-components'

import { ContentTitle } from '../Typography/Typography'

// -------------------------------------------------------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(ContentTitle)`
  margin-bottom: 1.4rem;
`

export const Subtitle = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`

export const Input = styled.input<{ $error: boolean }>`
  display: block;
  width: 100%;
  background-color: #161616;
  border: none;
  border-bottom: 1px solid ${({ $error, theme }) => ($error ? theme.colors.error : '#777777')};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  height: 44px;
  padding: 9px 14px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #777777;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: #161616;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: 0 0 0px 1000px #161616 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const TextArea = styled.textarea<{ $error: boolean }>`
  display: block;
  width: 100%;
  background-color: #161616;
  border: none;
  border-bottom: 1px solid ${({ $error, theme }) => ($error ? theme.colors.error : '#777777')};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 9px 14px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.2rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
`

export const ButtonWrapper = styled.div`
  /* width: 50%; */
`
