import canvasConfetti from 'canvas-confetti'

const r = (mi: number, ma: number) => Math.random() * (ma - mi) + mi
let lastX = 0

export const blastConfetti = (evt: MouseEvent, hard: boolean) => {
  const direction = Math.sign(lastX - evt?.clientX)
  lastX = evt.clientX
  const particleCount = hard ? r(122, 245) : r(2, 15)
  canvasConfetti({
    particleCount,
    angle: r(90, 90 + direction * 30),
    colors: ['#0000FF', '#FFFF00'],
    spread: r(45, 80),
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight
    }
  })
}

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
