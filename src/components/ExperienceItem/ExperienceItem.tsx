import React, { useState } from 'react'

import { fadeInX } from '@animations'

import * as S from './ExperienceItem.styles'

// -------------------------------------------------------------

type Props = {
  index: number
  title: string
  company: string
  location: string
  start_date: string
  end_date: string
  description: string[]
}

// -------------------------------------------------------------

export const ExperienceItem = ({ title, company, location, start_date, end_date, description, index }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleDescription = isExpanded ? description : description.slice(0, 3)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <S.Container variants={fadeInX} custom={index}>
      <S.Title>{title}</S.Title>
      <S.Company>{company}</S.Company>
      <S.MetaInfoWrapper>
        <S.Location>{location}</S.Location>
        <span>&#8226;</span>
        <S.Date>
          {start_date} - {end_date}
        </S.Date>
      </S.MetaInfoWrapper>
      <S.Description>
        {visibleDescription.map((item, index) => (
          <S.DescriptionItem key={index}>{item}</S.DescriptionItem>
        ))}
        {description.length > 3 && (
          <S.ToggleButton onClick={handleToggle}>{isExpanded ? 'Show less' : 'Show more'}</S.ToggleButton>
        )}
      </S.Description>
    </S.Container>
  )
}
