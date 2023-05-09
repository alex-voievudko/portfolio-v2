import styled from 'styled-components'
// @framer-motion
import { motion } from 'framer-motion'
import {
	ContentSubtitle,
	ContentTitle,
} from '@components/Typography/Typography'

export const Section = styled.section`
	width: 100%;
	margin-bottom: 10rem;
	padding-bottom: 51px;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding-bottom: 0;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media ${({ theme }) => theme.breakpoints.lg} {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		align-items: center;
		gap: 3.2rem;
	}

	@media ${({ theme }) => theme.breakpoints.xl} {
		grid-template-columns: 43rem 1fr;
		gap: 6.4rem;
	}
`

export const ImageWrapper = styled(motion.div)`
	position: relative;
	height: 20rem;
	width: 20rem;
	display: block;
	border-radius: 50%;
	border: 0.8rem solid ${({ theme }) => theme.colors.overlay};
	margin: 0 auto 3.2rem auto;
	overflow: hidden;

	@media ${({ theme }) => theme.breakpoints.md} {
		height: 24rem;
		width: 24rem;
		margin: 0 auto 4rem auto;
	}

	@media ${({ theme }) => theme.breakpoints.lg} {
		height: 44rem;
		width: auto;
		margin: 0 0 0 0;
		border-radius: 0;
		border: none;
	}

	@media ${({ theme }) => theme.breakpoints.xl} {
		height: 52rem;
		width: 43rem;
	}
`

export const ContentWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const Subtitle = styled(ContentSubtitle)`
	margin: 0 0 1.6rem 0;
	text-align: left;
`

export const Title = styled(ContentTitle)`
	margin: 0 0 1.6rem 0;
	text-align: left;
`

export const Description = styled.p`
	margin: 0;
	padding-bottom: 2.4rem;
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.95;
	text-align: left;
	border-bottom: 2px solid rgba(255, 255, 255, 0.08);

	@media ${({ theme }) => theme.breakpoints.lg} {
		padding-bottom: 2rem;
	}

	@media ${({ theme }) => theme.breakpoints.xl} {
		padding-bottom: 3rem;
	}
`

export const ContactInfo = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	padding: 2.4rem 0;

	@media ${({ theme }) => theme.breakpoints.md} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${({ theme }) => theme.breakpoints.lg} {
		padding: 2rem 0;
	}

	@media ${({ theme }) => theme.breakpoints.xl} {
		padding: 3rem 0;
	}
`

export const ContactInfoItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1.2rem;
`

export const ContactInfoLabel = styled.span`
	color: #dadada;
	font-size: 1.4rem;
	font-weight: 500;
`

export const ContactInfoText = styled.span`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.4rem;
	font-weight: 400;
`

export const ActionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.md} {
		flex-direction: row;
		align-items: center;
	}
`

export const ButtonWrapper = styled.div`
	margin-bottom: 2.4rem;

	@media ${({ theme }) => theme.breakpoints.md} {
		margin-bottom: 0;
		margin-right: 2.4rem;
	}
`

export const SocialLinksWrapper = styled.div`
	display: flex;
	align-items: center;

	&::before {
		content: '';
		display: block;
		height: 0.2rem;
		width: 6rem;
		background-color: rgba(255, 255, 255, 0.25);
		margin-right: 2.4rem;
	}
`
