import Confetti from 'canvas-confetti'

const r = (mi: number, ma: number) => Math.random() * (ma - mi) + mi
let lastX = 0

export const blastConfetti = (evt: MouseEvent, hard: boolean) => {
  const direction = Math.sign(lastX - evt?.clientX)
  lastX = evt.clientX
  const particleCount = hard ? r(122, 245) : r(2, 15)
  Confetti({
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
