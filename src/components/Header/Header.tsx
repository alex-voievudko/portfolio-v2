import React, { useState, useEffect } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'

import * as S from './Header.styles'

// -------------------------------------------------------------

type Link = {
  name: string
  to: string
}

type Data = {
  allImageSharp: {
    edges: {
      node: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

// -------------------------------------------------------------

// TODO: Revrite using graphql
const links: Link[] = [
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Resume',
    to: '/resume',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
]

// -------------------------------------------------------------

export const Header = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: { id: { eq: "bf824060-d095-5300-8a3f-b637c3f26dd8" } }) {
        edges {
          node {
            gatsbyImageData(height: 100, width: 100, layout: CONSTRAINED, placeholder: NONE, formats: AUTO)
          }
        }
      }
    }
  `)
  const image = getImage(data.allImageSharp.edges[0].node.gatsbyImageData) as IGatsbyImageData

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.Header $scrolled={isScrolled}>
      <S.Logo to="/">
        <S.LogoImageWrapper>
          <GatsbyImage image={image} alt="logo" />
        </S.LogoImageWrapper>
      </S.Logo>
      <S.MobileButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CgClose size={24} color="#e6e6e6" /> : <CgMenuRightAlt size={30} color="#e6e6e6" />}
      </S.MobileButton>
      <S.NavMobile
        initial={{ height: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          transition: { duration: 0.3 },
        }}
        exit={{ height: 0, transition: { duration: 0.3 } }}
      >
        <S.NavList>
          {links.map(({ name, to }) => (
            <S.NavItem key={name}>
              <S.NavLink to={to} activeClassName="active-mobile" onClick={() => setIsMenuOpen(false)}>
                {name}
              </S.NavLink>
            </S.NavItem>
          ))}
        </S.NavList>
      </S.NavMobile>

      <S.NavDesktop>
        <S.NavList>
          {links.map(({ name, to }) => (
            <S.NavItem key={name}>
              <S.NavLink activeClassName="active" to={to}>
                {name}
                <S.AnimatedBar
                  initial={{ width: 0 }}
                  animate={{
                    width: '80%',
                    transition: { delay: 0.5, duration: 0.3, ease: 'linear' },
                  }}
                />
              </S.NavLink>
            </S.NavItem>
          ))}
        </S.NavList>
      </S.NavDesktop>
    </S.Header>
  )
}
