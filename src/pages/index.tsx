import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import Confetti from 'canvas-confetti'
import type { NextPage } from 'next'
import { useTranslation } from '../utils/use-translation'
import Link from 'next/link'

const localisation = {
  en: {
    title: 'Donate your yield to help'
  },
  fr: {
    title: 'Donnez votre rendement'
  }
}

const r = (mi: number, ma: number) => Math.random() * (ma - mi) + mi
let lastX = 0

const blastConfetti = (evt: MouseEvent, hard: boolean) => {
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

const Home: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100%"
      onClick={(evt: any) => {
        blastConfetti(evt, false)
      }}
    >
      <Flex direction="column" alignItems="center">
        <Heading
          color="#fff"
          fontWeight="bold"
          fontSize="48"
          textAlign="center"
        >
          {translate('title')}{' '}
          <Text color="#FFD500" display="inline">
            Ukraine
          </Text>
        </Heading>

        <Flex alignItems="center" gap={5}>
          <Image height={65} src="/eth.svg" alt="ETH Logo" />
          <Text
            color="#fff"
            fontWeight="bold"
            fontSize="96px"
            textAlign="center"
          >
            123.4
          </Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Link href="/stake">
            <Button
              backgroundColor="#FFD500"
              style={{
                borderRadius: 25,
                height: 58,
                width: 251,
                marginTop: 50
              }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Text fontSize="2.8vh">Stake</Text>
            </Button>
          </Link>
          <Link href="/donate">
            <Button
              backgroundColor="#fff"
              style={{
                borderRadius: 25,
                height: 58,
                width: 251,
                marginTop: 20
              }}
            >
              <Text fontSize="2.8vh">Donate</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
