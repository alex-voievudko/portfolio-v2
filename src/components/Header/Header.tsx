import React, { useState, useEffect } from 'react'
// @styles
import * as S from './Header.styles'
// @ icons
import { CgMenuRightAlt } from 'react-icons/cg'
import { CgClose } from 'react-icons/cg'

type Link = {
	name: string
	to: string
}

// TODO: Revrite using graphql
const links: Link[] = [
	{
		name: 'About',
		to: '/about',
	},
	{
		name: 'Resume',
		to: '/resume',
	},
	{
		name: 'Portfolio',
		to: '/portfolio',
	},
	{
		name: 'Contact',
		to: '/contact',
	},
]

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<S.Header $scrolled={isScrolled}>
			<S.Logo to='/'>Logo</S.Logo>
			<S.MobileButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? (
					<CgClose size={24} color='#e6e6e6' />
				) : (
					<CgMenuRightAlt size={30} color='#e6e6e6' />
				)}
			</S.MobileButton>
			<S.NavMobile
				initial={{ height: 0 }}
				animate={{
					height: isMenuOpen ? 'auto' : 0,
					transition: { duration: 0.3 },
				}}
				exit={{ height: 0, transition: { duration: 0.3 } }}
			>
				<S.NavList>
					{links.map(({ name, to }) => (
						<S.NavItem key={name}>
							<S.NavLink
								to={to}
								activeClassName='active-mobile'
								onClick={() => setIsMenuOpen(false)}
							>
								{name}
							</S.NavLink>
						</S.NavItem>
					))}
				</S.NavList>
			</S.NavMobile>

			<S.NavDesktop>
				<S.NavList>
					{links.map(({ name, to }) => (
						<S.NavItem key={name}>
							<S.NavLink activeClassName='active' to={to}>
								{name}
								<S.AnimatedBar
									initial={{ width: 0 }}
									animate={{
										width: '80%',
										transition: { delay: 0.5, duration: 0.3, ease: 'linear' },
									}}
								/>
							</S.NavLink>
						</S.NavItem>
					))}
				</S.NavList>
			</S.NavDesktop>
		</S.Header>
	)
}
