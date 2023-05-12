import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FiDownload, FiGithub } from 'react-icons/fi'
import Typed from 'react-typed'

import { fadeInUp, fadeInLeft } from '@animations'
import { Button, Container, SocialLinks } from '@components'

import * as S from './HeroSection.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        hero_section: {
          title: string
          subtitle: string
          variants: string[]
          background_image: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
          buttons: {
            label: string
            url: string
          }[]
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const HeroSection = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "home-page" } }) {
        edges {
          node {
            hero_section {
              title
              subtitle
              variants
              background_image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                }
              }
              buttons {
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  const { title, subtitle, variants, background_image, buttons } = data.allPages.edges[0].node.hero_section
  const backgroundImage = getImage(background_image) as IGatsbyImageData
  const buttonCv = buttons[0]
  const buttonGithub = buttons[1]

  return (
    <S.Section>
      <S.Background image={backgroundImage} alt="hero-background" />
      <Container fullHeight>
        <S.Content>
          <S.Title dangerouslySetInnerHTML={{ __html: title }} variants={fadeInUp}></S.Title>
          <S.Subtitle variants={fadeInUp}>
            {subtitle}
            &nbsp;
            <Typed strings={variants} typeSpeed={40} backSpeed={50} loop />
          </S.Subtitle>
          <S.ButtonsWrapper variants={fadeInUp}>
            <Button as="a" href={buttonCv.url} variant="solid" leftIcon={<FiDownload />}>
              {buttonCv.label}
            </Button>

            <Button as="a" href={buttonGithub.url} variant="outline" leftIcon={<FiGithub />}>
              {buttonGithub.label}
            </Button>
          </S.ButtonsWrapper>
        </S.Content>
      </Container>
      <S.FixedSocialLinks variants={fadeInLeft}>
        <SocialLinks direction="column" />
      </S.FixedSocialLinks>
    </S.Section>
  )
}
