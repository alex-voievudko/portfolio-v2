import React from 'react'

import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IoMdQuote } from 'react-icons/io'

import * as S from './Recommendation.styles'

// -------------------------------------------------------------

type Props = {
  recommendation: {
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
  }
}

// -------------------------------------------------------------

export const Recommendation = ({ recommendation }: Props) => {
  const { name, profile_url, position, meta_info, text } = recommendation
  const image = getImage(recommendation.image) as IGatsbyImageData
  return (
    <S.Container>
      <S.Grid>
        <S.ImageWrapper>
          <GatsbyImage image={image} alt={name} />
        </S.ImageWrapper>
        <S.MetadataWrapper>
          <S.Name>
            <a href={profile_url} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          </S.Name>
          <S.Position>{position}</S.Position>
          <S.MetaInfo>{meta_info}</S.MetaInfo>
        </S.MetadataWrapper>
        <IoMdQuote />
        <S.Text dangerouslySetInnerHTML={{ __html: text }}></S.Text>
      </S.Grid>
    </S.Container>
  )
}
