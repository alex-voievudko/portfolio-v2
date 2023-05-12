import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { stagger } from '@animations'
import { Header, Overlay, ScrollToTop } from '@components'
import { ThemeProvider } from '@theme'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div variants={stagger} initial="hidden" animate="show" exit="exit">
          <Header />
          <main>{children}</main>
          <ScrollToTop offset={250} />
        </motion.div>
      </AnimatePresence>
      <Overlay />
    </ThemeProvider>
  )
}
