import React from 'react'

import { FaUserAlt, FaMapMarkedAlt, FaEnvelope, FaLinkedin, FaTelegram } from 'react-icons/fa'

// -------------------------------------------------------------

type Icon = {
  [key: string]: JSX.Element
}

export const getIcons = (iconName: string) => {
  const icons: Icon = {
    user: <FaUserAlt />,
    location: <FaMapMarkedAlt />,
    email: <FaEnvelope />,
    linkedin: <FaLinkedin />,
    telegram: <FaTelegram />,
  }

  return icons[iconName]
}
