import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import React from 'react'

import { AnimatePresence } from 'framer-motion'
import type { GatsbyBrowser } from 'gatsby'

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  const loader = document.getElementById('loader')

  if (loader) {
    loader.classList.add('active')
    setTimeout(() => {
      loader.classList.remove('active')
    }, 750)
  }
}

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  )
}

export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = () => {
  return false
}

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
    })
  }, 500)
}
