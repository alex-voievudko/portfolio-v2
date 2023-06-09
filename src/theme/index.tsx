import React from 'react'

// @styled-components
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'

import { GlobalStyle } from './styles'
import { theme } from './theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)
