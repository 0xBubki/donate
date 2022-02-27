import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../components/Root'
import { useTranslation } from '../utils/use-translation'

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

      <Flex direction="column" alignItems="center">
        <Heading color="#fff" fontWeight="bold" fontSize="48" textAlign="center">
          {translate('title')}
          {' '}
          <span color="#FFD500">Ukraine</span>
        </Heading>

        <Text color="#fff" fontWeight="bold" fontSize="96px" textAlign="center">
          Ξ123.4
        </Text>

        <Flex direction="column" alignItems="center">
          <Button
            backgroundColor="#FFD500"
            style={{ borderRadius: 25, height: 58, width: 194, marginTop: 50 }}
          >
            Donate Now {'>'}
          </Button>
          <Button
            backgroundColor="#fff"
            style={{ borderRadius: 25, height: 58, width: 251, marginTop: 20 }}
          >
            Explore NFTs
          </Button>
        </Flex>
      </Flex>
    </Root>
  )
}

export default Home
