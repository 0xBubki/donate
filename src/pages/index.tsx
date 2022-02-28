import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
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

const Home: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100%"
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
