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
      staggerChildren: 0.3,
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

export const imageScale: Variants = {
  hidden: {
    display: 'none',
    scale: 1.25,
  },
  show: {
    display: 'block',
    scale: 1,
    transition: {
      delay: 2.25,
      duration: 1,
      // ease: 'easeInOut',
    },
  },
}

export const reveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  show: {
    scaleX: [0, 1, 1, 0],
    originX: [0, 0, 1, 1],
    transition: {
      duration: 1.25,
      times: [0, 0.4, 0.6, 1],
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
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

export const fadeInX: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -20 : 20,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const skillItem: Variants = {
  hidden: {
    width: 0,
  },
  show: (width: number) => ({
    width: `${width}%`,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  }),
}
