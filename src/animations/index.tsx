import { Variants, cubicBezier } from 'framer-motion'

export const stagger: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
      delayChildren: 0.75,
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
}

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 72,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const width: Variants = {
  hidden: {
    width: 0,
  },
  show: {
    width: 72,
    transition: {
      delay: 1.75,
      duration: 0.45,
      ease: 'linear',
    },
  },
}

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const zoomOut: Variants = {
  hidden: {
    opacity: 0,
    scale: 2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

const ease = cubicBezier(0.77, 0, 0.175, 1)
export const revile: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0,0% 0,0% 100%,0 100%)',
  },
  show: {
    opacity: 1,
    clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
    transition: {
      duration: 0.75,
      easings: ease,
    },
  },
}

export const toTopButton: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
}

export const toTopButtonIcon: Variants = {
  show: {
    y: [0, 2, 0, -2, 0],
    transition: {
      delay: 0.15,
      duration: 1.5,
      times: [0, 0.25, 0.5, 0.75, 1],
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

export const fadeInFromLeft100: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const fadeInFromRight100: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}
