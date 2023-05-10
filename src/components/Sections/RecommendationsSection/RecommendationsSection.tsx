import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Carousel from 'nuka-carousel'
// @styles
import * as S from './RecommendationsSection.styles'
// @components
import { Container } from '@components/Container/Container'
import { Recommendation } from '@components/Recommendation/Recommendation'
// @animations
import { fadeInUp } from '@animations'

type Data = {
	allPages: {
		edges: {
			node: {
				recommendations_section: {
					title: string
					subtitle: string
					recommendations: {
						name: string
						profile_url: string
						position: string
						meta_info: string
						text: string
						image: {
							childImageSharp: {
								gatsbyImageData: IGatsbyImageData
							}
						}
					}[]
				}
			}
		}[]
	}
}

export const RecommendationsSection = () => {
	const data: Data = useStaticQuery(graphql`
		query {
			allPages(filter: { page_id: { eq: "about-page" } }) {
				edges {
					node {
						recommendations_section {
							title
							subtitle
							recommendations {
								name
								profile_url
								position
								meta_info
								text
								image {
									childImageSharp {
										gatsbyImageData(
											width: 100
											placeholder: NONE
											layout: CONSTRAINED
											formats: [AUTO, WEBP, AVIF]
										)
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const { title, subtitle, recommendations } =
		data.allPages.edges[0].node.recommendations_section

	const isMd = useMediaQuery({ query: '(min-width: 768px)' })

	return (
		<S.Section>
			<Container>
				<S.Wrapper>
					<S.Subtitle variants={fadeInUp}>{subtitle}</S.Subtitle>
					<S.Title variants={fadeInUp}>{title}</S.Title>
				</S.Wrapper>
				<S.CarouselWrapper variants={fadeInUp}>
					<Carousel
						autoplay={true}
						wrapAround={true}
						cellAlign='left'
						cellSpacing={16}
						defaultControlsConfig={{
							pagingDotsClassName: 'carousel-paging-dots',
							pagingDotsContainerClassName: 'carousel-paging-dots-container',
						}}
						slidesToShow={isMd ? 2 : 1}
						renderCenterLeftControls={({ previousSlide }) => null}
						renderCenterRightControls={({ nextSlide }) => null}
					>
						{recommendations.map((recommendation, index) => (
							<Recommendation
								key={recommendation.name}
								recommendation={recommendation}
							/>
						))}
					</Carousel>
				</S.CarouselWrapper>
			</Container>
		</S.Section>
	)
}
