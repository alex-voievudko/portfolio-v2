import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2.4rem;
	background-color: #161616;
	height: 100%;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding: 4.4rem 4rem;
	}
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 5rem 1fr 4.8rem;
	grid-template-rows: auto auto;
	column-gap: 1.4rem;
	row-gap: 2.4rem;

	svg {
		display: none;

		@media ${({ theme }) => theme.breakpoints.md} {
			display: block;
			grid-column: 3 / 4;
			grid-row: 1 / 2;
			width: 4.8rem;
			height: 4.8rem;
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const ImageWrapper = styled.div`
	position: relative;
	width: 5rem;
	height: 5rem;
	grid-column: 1 / 2;
	border-radius: 50%;
	border: 0.4rem solid rgba(255, 255, 255, 0.1);
	overflow: hidden;
	z-index: 1;

	.gatsby-image-wrapper {
		position: relative;
		z-index: 0;
	}
`

export const MetadataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: 2 / 4;
	min-height: 11rem;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding-right: 1.4rem;
		grid-column: 2 / 3;
	}
`

export const Name = styled.div`
	a {
		color: #efefef;
		font-size: 1.6rem;
		font-weight: 500;
		text-decoration: none;
		transition: color 0.3s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const Position = styled.div``

export const MetaInfo = styled.div`
	color: rgb(159 159 159 / 50%);
	font-size: 1.2rem;
	font-weight: 400;
`

export const Text = styled.div`
	grid-column: 1 / 4;
	grid-row: 2 / 3;

	p:first-child {
		margin-top: 0;
	}

	p:last-child {
		margin-bottom: 0;
	}
`
