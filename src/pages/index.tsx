import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../components/Root'
import { useTranslation } from '../utils/use-translation'
import { ArrowRightIcon } from '@heroicons/react/outline'

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
    <Root>
      <Head>
        <title>Donate | Help Ukraine</title>
        <meta name="description" content="Donate your yield to help Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            {translate('title')} <span color="#FFD500">Ukraine</span>
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
              <Text>Donate Now</Text>
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
            <Button
              backgroundColor="#fff"
              style={{
                borderRadius: 25,
                height: 58,
                width: 251,
                marginTop: 20
              }}
            >
              Explore NFTs
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Root>
  )
}

export default Home
