import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// @styles
import * as S from './SocialLinks.styles'
// @icons
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa'

type Props = {
	direction: 'row' | 'column'
}

type Data = {
	allPages: {
		edges: {
			node: {
				hero_section: {
					social_links: {
						label: string
						url: string
					}[]
				}
			}
		}[]
	}
}

type Icon = {
	[key: string]: JSX.Element
}

const Icon: Icon = {
	github: <FaGithub />,
	linkedin: <FaLinkedin />,
	instagram: <FaInstagram />,
	telegram: <FaTelegram />,
}

export const SocialLinks = ({ direction }: Props) => {
	const data: Data = useStaticQuery(graphql`
		query {
			allPages(filter: { page_id: { eq: "home-page" } }) {
				edges {
					node {
						hero_section {
							social_links {
								label
								url
							}
						}
					}
				}
			}
		}
	`)

	const socialLinks = data.allPages.edges[0].node.hero_section.social_links

	return (
		<S.Wrapper $direction={direction}>
			{socialLinks.map(({ label, url }) => {
				const IconComponent = Icon[label]

				return (
					<S.Link
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						key={label}
					>
						{IconComponent}
					</S.Link>
				)
			})}
		</S.Wrapper>
	)
}
