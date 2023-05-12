import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  breakpoints: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    '2xl': '(min-width: 1400px)',
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    background: '#101010',
    text: '#9f9f9f',
    link: '#e6e6e6',
    overlay: '#191919',
    primary: '#8739fa',
    primaryHover: '#7733DE',
    cardTitle: '#f3f3f3',
    error: '#ff0000',
    success: '#009e66',
  },
}
