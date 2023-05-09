import styled from 'styled-components'

export const Wrapper = styled.div<{ $direction: 'row' | 'column' }>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	align-items: center;
	justify-content: center;
	gap: 1.4rem;
`

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.7);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		scale: 1.1;
		color: ${({ theme }) => theme.colors.white};
	}

	svg {
		width: 2rem;
		height: 2rem;

		@media ${({ theme }) => theme.breakpoints.md} {
			width: 2.4rem;
			height: 2.4rem;
		}
	}
`
