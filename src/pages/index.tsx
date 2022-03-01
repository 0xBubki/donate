import type { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'

import { useEffect } from 'react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { confetti, blastConfetti } from '../utils/confetti'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  useEffect(() => {
    /**
     * Every few seconds, blast confetti at a random location.
     */
    const interval = setInterval(() => {
      const x = 0.5
      const y = -0.01
      console.log('Confetti at', { x, y })
      confetti({
        particleCount: 50,
        angle: 90,
        startVelocity: 45,
        spread: 90,
        ticks: 500,
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
      width="100vw"
      height={'75vh'}
      mt={['-20vh', '0px']}
      onClick={(evt: any) => {
        blastConfetti(evt, true)
      }}
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        <Heading fontSize={['1.4em', '1.7em', '2.1em']}>
          {t('homepage-title')}{' '}
          <Text display="inline" color="ukraineYellow">
            Ukraine
          </Text>
        </Heading>

        <Flex mt="1vh" fontWeight="bold" alignItems="center" gap={5}>
          <Text fontSize={['2.2em', '2.8em', '4.2em']}>₴1,234,567.00</Text>
          <Text
            mt={['9px', '9px', '25px']}
            fontSize={['1.3em', '1.8em', '2em']}
          >
            {' '}
            {t('donated')}
          </Text>
        </Flex>
        <Text
          color="rgba(255, 255, 255, 0.88)"
          fontWeight="bold"
          fontSize={['1.3em', '1.7em', '1.8em']}
        >
          Ξ123,456.00
        </Text>

        <NextLink href="/stake" passHref>
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
            {t('stake')}
          </Button>
        </NextLink>
        <NextLink href="/donate" passHref>
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
            {t('donate')}
          </Button>
        </NextLink>
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
        />
      </Flex>
    </Flex>
  )
}

export const getStaticProps = async ({ locale }: LocaleTypeProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Home
