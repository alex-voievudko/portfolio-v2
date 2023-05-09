import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// @layouts
import { Layout } from '@layouts'
// @components
import { Container } from '@components/Container/Container'
import { PageHeading } from '@components/PageHeading/PageHeading'

const ResumePage = () => {
	return (
		<Layout>
			<Container>
				<PageHeading title='Resume' description='My professional journey' />
			</Container>
		</Layout>
	)
}

export default ResumePage

export const Head: HeadFC = () => <title>Resume Page</title>
