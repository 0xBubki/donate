import canvasConfetti from 'canvas-confetti'

const DEFAULTS: canvasConfetti.Options = {
  colors: ['#0000FF', '#FFFF00']
  /**
   * Respect user's preferences regarding reduced motion.
   */
  // disableForReducedMotion: true,
}

export const confetti = (options: Partial<canvasConfetti.Options> = {}) => {
  canvasConfetti({
    ...DEFAULTS,
    ...options
  })
}
