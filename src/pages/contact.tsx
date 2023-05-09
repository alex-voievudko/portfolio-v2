import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// @layouts
import { Layout } from '@layouts'
// @components
import { Container } from '@components/Container/Container'
import { PageHeading } from '@components/PageHeading/PageHeading'

const ContactPage = () => {
	return (
		<Layout>
			<Container>
				<PageHeading
					title='Contact'
					description='Feel free to contact me anytimes'
				/>
			</Container>
		</Layout>
	)
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Page</title>
