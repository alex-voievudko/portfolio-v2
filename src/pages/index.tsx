import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// @layouts
import { Layout } from '@layouts'
// @sections
import { HeroSection } from '@components/Sections'

const HomePage = () => {
	return (
		<Layout>
			<HeroSection />
			{/* <Overlay /> */}
		</Layout>
	)
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>
