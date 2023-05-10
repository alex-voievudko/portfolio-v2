import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 0.8rem;
	transition: all 0.3s ease-in-out;
	height: 20rem;
	cursor: pointer;

	&:hover {
		& > video {
			transform: scale(1.1);
		}
	}

	&::after {
		display: none;

		@media ${({ theme }) => theme.breakpoints.lg} {
			display: block;
			content: 'Hover to play';
			position: absolute;
			top: 75%;
			left: 0;
			padding: 0.8rem 1.2rem;
			background-color: rgba(0, 0, 0, 0.8);
			color: ${({ theme }) => theme.colors.white};
			font-size: 1.2rem;
			font-weight: 400;
			text-align: center;
			line-height: 1;
			transform-origin: 0 0;
			transform: rotate(270deg);
			box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.8); // 0 0 15px rgba(0, 0, 0, 0.2)
			transition: all 0.4s ease-in-out;
		}
	}

	&:hover::after {
		@media ${({ theme }) => theme.breakpoints.lg} {
			transform: translateX(-40%) rotate(270deg);
		}
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s ease-in-out;
	}
`
