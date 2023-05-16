import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { stagger } from '@animations'
import { Header, Overlay, ScrollToTop, Loader } from '@components'
import { ThemeProvider } from '@theme'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div variants={stagger} initial="hidden" animate="show" exit="exit">
          <Header />
          <main>{children}</main>
          <ScrollToTop offset={250} />
        </motion.div>
      </AnimatePresence>
      <Overlay />
      <Loader />
    </ThemeProvider>
  )
}
