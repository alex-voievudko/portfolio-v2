import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// @layouts
import { Layout } from '@layouts'
// @components
import { Container } from '@components/Container/Container'
import { PageHeading } from '@components/PageHeading/PageHeading'

const PortfolioPage = () => {
	return (
		<Layout>
			<Container>
				<PageHeading
					title='Portfolio'
					description='Here you can find some of my projects'
				/>
			</Container>
		</Layout>
	)
}

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio Page</title>
