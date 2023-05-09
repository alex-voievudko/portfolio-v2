import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
// @framer-motion
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
	element,
}) => {
	return (
		<AnimatePresence mode='wait' initial={false}>
			{element}
		</AnimatePresence>
	)
}
