import styled, { keyframes, Keyframes } from 'styled-components'
import { Link } from 'gatsby'
// @framer-motion
import { motion } from 'framer-motion'

const fadeIn: Keyframes = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

export const Header = styled.header<{ $scrolled: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.3rem 3.2rem;
	background-color: ${({ $scrolled }) =>
		$scrolled ? 'rgba(17, 17, 17, 0.7)' : 'transparent'};
	backdrop-filter: ${({ $scrolled }) =>
		$scrolled ? 'saturate(180%) blur(5px)' : 'none'};
	border-bottom: ${({ $scrolled }) =>
		$scrolled ? 'inset 0 -1px 0 0 rgba(0,0,0,.1)' : 'none'};
	transition: all 0.3s ease-in-out;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding: 2.3rem 4.8rem;
	}
`

export const Logo = styled(Link)``

export const MobileButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	cursor: pointer;
	z-index: 9999;

	@media ${({ theme }) => theme.breakpoints.md} {
		display: none;
	}
`

export const NavMobile = styled(motion.nav)`
	position: absolute;
	overflow: hidden;
	display: flex;
	justify-content: flex-end;
	top: 100%;
	right: 3.2rem;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.md} {
		display: none;
	}
`

export const NavDesktop = styled.nav`
	display: none;

	@media ${({ theme }) => theme.breakpoints.md} {
		display: flex;
	}
`

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 20rem;
	margin: 0;
	padding: 0.8rem 2rem;
	background-color: ${({ theme }) => theme.colors.overlay};
	list-style: none;
	z-index: 9999;

	@media ${({ theme }) => theme.breakpoints.md} {
		flex-direction: row;
		gap: 3.2rem;
		align-items: center;
		width: auto;
		background-color: transparent;
		padding: 0;
	}
`

export const NavItem = styled.li`
	width: 100%;
`

export const NavLink = styled(Link)`
	position: relative;
	display: block;
	color: rgba(255, 255, 255, 0.7);
	font-size: 14px;
	letter-spacing: 0.35px;
	padding: 7px 0;
	text-decoration: none;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		color: ${({ theme }) => theme.colors.link};
		font-size: 1.6rem;
		padding: 0;
	}

	&.active-mobile {
		color: ${({ theme }) => theme.colors.white};

		&::after {
			opacity: 0;
			content: '';
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			display: block;
			width: 0.6rem;
			height: 0.6rem;
			background-color: ${({ theme }) => theme.colors.primary};
			animation: ${fadeIn} 0.3s ease-in-out forwards;
			animation-delay: 0.5s;
		}
	}

	&.active {
		color: ${({ theme }) => theme.colors.white};
	}
`

export const AnimatedBar = styled(motion.div)`
	@media ${({ theme }) => theme.breakpoints.md} {
		opacity: 0;
		position: relative;
		display: block;
		width: 3.6rem;
		height: 0.4rem;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: opacity 0.3s ease-in-out;
		transition-delay: 0.5s;

		.active & {
			opacity: 1;
		}
	}
`
