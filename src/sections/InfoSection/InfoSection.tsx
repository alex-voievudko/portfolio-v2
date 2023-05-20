import React from 'react'

import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FiDownload } from 'react-icons/fi'

import { imageScale, reveal, fadeInUp } from '@animations'
import { Button, Container, SocialLinks } from '@components'

import * as S from './InfoSection.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        info_section: {
          title: string
          subtitle: string
          description: string
          image: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
          detailed_info: {
            name: string
            email: string
            age: string
            location: string
          }
          button: {
            url: string
            label: string
          }
        }
      }
    }[]
  }
}

// -------------------------------------------------------------

export const InfoSection = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "about-page" } }) {
        edges {
          node {
            info_section {
              title
              subtitle
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 430, placeholder: NONE, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
                }
              }
              detailed_info {
                name
                email
                age
                location
              }
              button {
                url
                label
              }
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, description, image, detailed_info, button } = data.allPages.edges[0].node.info_section
  const photo = getImage(image) as IGatsbyImageData

  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.ImageWrapper>
            <motion.div variants={imageScale} style={{ overflow: 'hidden' }}>
              <GatsbyImage image={photo} alt={title} />
            </motion.div>
            <S.Overlay variants={reveal} />
          </S.ImageWrapper>
          <S.ContentWrapper variants={fadeInUp}>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.Title>{title}</S.Title>
            <S.Description dangerouslySetInnerHTML={{ __html: description }}></S.Description>
            <S.ContactInfo>
              {/* Name */}
              <S.ContactInfoItem>
                <S.ContactInfoLabel>Name:</S.ContactInfoLabel>
                <S.ContactInfoText>{detailed_info.name}</S.ContactInfoText>
              </S.ContactInfoItem>
              {/* Email */}
              <S.ContactInfoItem>
                <S.ContactInfoLabel>Email:</S.ContactInfoLabel>
                <Button
                  variant="text"
                  href={`
                  mailto:${detailed_info.email}
                `}
                >
                  {detailed_info.email}
                </Button>
              </S.ContactInfoItem>
              {/* Age */}
              <S.ContactInfoItem>
                <S.ContactInfoLabel>Age:</S.ContactInfoLabel>
                <S.ContactInfoText>{detailed_info.age}</S.ContactInfoText>
              </S.ContactInfoItem>
              {/* Location */}
              <S.ContactInfoItem>
                <S.ContactInfoLabel>Location:</S.ContactInfoLabel>
                <S.ContactInfoText>{detailed_info.location}</S.ContactInfoText>
              </S.ContactInfoItem>
            </S.ContactInfo>
            <S.ActionsWrapper>
              <S.ButtonWrapper>
                <Button variant="solid" href={button.url} leftIcon={<FiDownload />} download>
                  {button.label}
                </Button>
              </S.ButtonWrapper>

              <S.SocialLinksWrapper>
                <SocialLinks direction="row" />
              </S.SocialLinksWrapper>
            </S.ActionsWrapper>
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
