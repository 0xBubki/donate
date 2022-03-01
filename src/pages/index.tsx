import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { useTranslation } from '../utils/use-translation'
import Image from 'next/image'
import { confetti, randomRange } from '../utils/confetti'
import { useEffect } from 'react'

const localisation = {
  en: {
    title: 'Donate your yield to help'
  },
  fr: {
    title: 'Donnez votre rendement'
  }
}

const blastConfetti = (evt: MouseEvent, hard: boolean) => {
  const particleCount = hard ? randomRange(122, 245) : randomRange(2, 15)

  confetti({
    particleCount,
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight
    }
  })
}

const Home: NextPage = () => {
  const translate = useTranslation(localisation)

  useEffect(() => {
    /**
     * Every few seconds, blast confetti at a random location.
     */
    const interval = setInterval(() => {
      const x = 0.5
      const y = -0.01
      console.log('Confetti at', { x, y })
      confetti({
        particleCount: 75,
        angle: 90,
        startVelocity: 45,
        spread: 90,
        ticks: 350,
        origin: { x, y }
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex
      flex="1"
      direction="column"
      justifyContent="center"
      onClick={(evt: any) => {
        blastConfetti(evt, false)
      }}
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        <Heading fontSize={['1.4em', '1.7em', '2.1em']}>
          {translate('title')}{' '}
          <Text display="inline" color="ukraineYellow">
            Ukraine
          </Text>
        </Heading>

        <Flex mt="1vh" fontWeight="bold" alignItems="center" gap={5}>
          <Text fontSize={['2.2em', '2.8em', '4.2em']}>₴1,234,567.00</Text>
          <Text mt={['9px', '9px', '25px']} fontSize={['1em', '1.75em', '2em']}>
            {' '}
            donated
          </Text>
        </Flex>
        <Text
          color="rgba(255, 255, 255, 0.88)"
          fontWeight="bold"
          fontSize={['1.3em', '1.7em', '1.8em']}
        >
          Ξ123,456.00
        </Text>

        <Button
          mt="5vh"
          color="black"
          w="180px"
          borderRadius="25px"
          bg="ukraineYellow"
          _hover={{
            bg: 'darkYellow'
          }}
          _active={{
            bg: 'darkYellow'
          }}
        >
          Stake
        </Button>
        <Button
          mt="2vh"
          color="black"
          bg="white"
          w="180px"
          borderRadius="25px"
          _hover={{
            bg: '#DDD'
          }}
          _active={{
            bg: '#DDD'
          }}
        >
          Donate
        </Button>
      </Flex>
      <Flex
        display={['none', 'none', 'none', 'none', 'block']}
        position="fixed"
        bottom="0"
        right="55%"
        h="85%"
        w="700px"
        mr="50px"
      >
        <Image
          priority
          src="/statue.png"
          alt="Statue"
          layout="fill"
          objectFit="contain"
        ></Image>
      </Flex>
    </Flex>
  )
}

export default Home
