import styled from 'styled-components'
// @framer-motion
import { motion } from 'framer-motion'

export const SectionTitle = styled(motion.h2)`
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(3.6rem, 3.4rem + 1.0417vw, 4.6rem);
	font-weight: 700;
	letter-spacing: -0.025rem;
	line-height: 1.2;
`

export const ContentTitle = styled(motion.h4)`
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(2.2rem, 1.86672rem + 1.0417vw, 3.2rem);
	font-weight: 700;
	line-height: 1.6;
`

export const ContentSubtitle = styled(motion.h3)`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 1.2;

	@media ${({ theme }) => theme.breakpoints.lg} {
		font-size: 2rem;
	}
`

export const SmallTitle = styled(motion.h3)`
	color: ${({ theme }) => theme.colors.cardTitle};
	font-size: 2rem;
	font-weight: 500;
	letter-spacing: -0.05rem;
	line-height: 1.2;
`
