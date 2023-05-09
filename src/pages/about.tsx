import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// @framer-motion
import { motion } from 'framer-motion'
// @layouts
import { Layout } from '@layouts'
// @sections
import { InfoSection } from '@components/Sections'
import { RecommendationsSection } from '@components/Sections'
// @components
import { Container } from '@components/Container/Container'
import { PageHeading } from '@components/PageHeading/PageHeading'
// @animations
import { stagger } from '@animations'

const AboutPage = () => {
	return (
		<Layout>
			<motion.div variants={stagger} initial='hidden' animate='show'>
				<PageHeading title='About Me' description='Get to know me' />
				<InfoSection />
				<RecommendationsSection />
			</motion.div>
		</Layout>
	)
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
