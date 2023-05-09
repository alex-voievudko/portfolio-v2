import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: {
			sm: string
			md: string
			lg: string
			xl: string
			'2xl': string
		}
		colors: {
			white: string
			black: string
			background: string
			text: string
			link: string
			overlay: string
			primary: string
			primaryHover: string
			cardTitle: string
		}
	}
}
