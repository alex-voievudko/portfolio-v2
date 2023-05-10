import styled, { css } from 'styled-components'

type Props = {
	$variant: 'solid' | 'outline' | 'text'
	$isCardButton?: boolean
}
export const Button = styled.a<Props>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	padding: ${({ $isCardButton }) =>
		$isCardButton ? '1.2rem 2.4rem' : '1rem 3.4rem;'};
	border-radius: 3rem;
	height: 4.3rem;
	max-height: 4.3rem;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.5;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	flex: 1 1 0;

	${({ $variant, theme }) => {
		switch ($variant) {
			case 'solid':
				return css`
					background-color: ${theme.colors.primary};
					color: ${theme.colors.white};
					border: 1px solid ${theme.colors.primary};

					&:hover {
						/* scale: 1.05; */
						background-color: ${theme.colors.primaryHover};
						border: 1px solid ${theme.colors.primaryHover};
						text-decoration: none;
					}
				`
			case 'outline':
				return css`
					background-color: rgba(135, 57, 250, 0.15);
					color: ${theme.colors.white};
					border: 1px solid ${theme.colors.primary};

					&:hover {
						/* scale: 1.05; */
						background-color: ${theme.colors.primaryHover};
						color: ${theme.colors.white};
						border: 1px solid ${theme.colors.primaryHover};
						text-decoration: none;
					}
				`
			case 'text':
				return css`
					padding: 0;
					font-weight: 400;
					background-color: transparent;
					color: ${theme.colors.primary};

					&:hover {
						color: ${theme.colors.primaryHover};
						text-decoration: underline;
					}
				`
		}
	}}

	svg {
		width: 1.6rem;
		height: 1.6rem;
	}
`
