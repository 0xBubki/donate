import canvasConfetti from 'canvas-confetti'

export const randomRange = (mi: number, ma: number) =>
  Math.random() * (ma - mi) + mi

const DEFAULTS: canvasConfetti.Options = {
  colors: ['#0000FF', '#FFFF00'],
  /**
   * Respect user's preferences regarding reduced motion.
   */
  disableForReducedMotion: true
}

export const confetti = (options: Partial<canvasConfetti.Options> = {}) => {
  const direction = Math.random() > 0.5 ? -1 : 1
  const particleCount = randomRange(122, 245)
  const angle = randomRange(90, 90 + direction * 30)
  const spread = randomRange(45, 80)

  canvasConfetti({
    ...DEFAULTS,
    particleCount,
    angle,
    spread,
    ...options
  })
}
