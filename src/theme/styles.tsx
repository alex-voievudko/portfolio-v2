import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // scroll bar
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.overlay};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Poppins,sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.95;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  `
