import * as React from 'react'
import type { HeadFC } from 'gatsby'
// @framer-motion
import { motion } from 'framer-motion'
// @layouts
import { Layout } from '@layouts'
// @sections
import { ProjectsSection } from '@components/Sections'
// @components
import { Container } from '@components/Container/Container'
import { PageHeading } from '@components/PageHeading/PageHeading'

const PortfolioPage = () => {
	return (
		<Layout>
			<PageHeading
				title='Portfolio'
				description='Here you can find some of my projects'
			/>
			<ProjectsSection />
		</Layout>
	)
}

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio Page</title>
