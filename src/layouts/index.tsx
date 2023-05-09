import React from 'react'
//@framer-motion
import { motion, AnimatePresence } from 'framer-motion'
// @custom theme
import { ThemeProvider } from '@theme'
// @components
import { Header } from '@components/Header/Header'
import { Overlay } from '@components/Overlay/Overlay'
// @animations
import { fadeIn } from '@animations'

type LayoutProps = {
	children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<ThemeProvider>
			<AnimatePresence>
				<motion.div variants={fadeIn} initial='hidden' animate='visible'>
					<Header />
					<main>{children}</main>
				</motion.div>
			</AnimatePresence>
			<Overlay />
		</ThemeProvider>
	)
}
