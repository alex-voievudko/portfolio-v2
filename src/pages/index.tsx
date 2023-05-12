import * as React from 'react'

import type { HeadFC } from 'gatsby'

import { Seo } from '@components'
import { Layout } from '@layouts'
import { HeroSection } from '@sections'

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  )
}

export default HomePage

export const Head: HeadFC = () => <Seo />
