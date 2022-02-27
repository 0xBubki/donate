import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
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

const About: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Root>
      <Head>
        <title>Donate | Help Ukraine</title>
        <meta name="description" content="Donate your yield to help Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="row"
        width="100vw"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Box width="885px">
            <Heading color="#fff" fontWeight="bold" fontSize="48">
              Why you should care
            </Heading>
            <Text
              color="#fff"
              fontWeight={400}
              fontSize="20px"
              mt="30px"
              lineHeight="122%"
            >
              If you haven’t heard already, Ukraine is under attack by Russia.
              Help support in doing our part! 💪
              <br />
              <Box mt="30px">
                Join us and the crypto community at large in providing
                humanitarian DeFi support to aid Ukraine.
              </Box>
            </Text>
          </Box>
          <Box mt="88px" width="742px">
            <Heading color="#fff" fontWeight="bold" fontSize="48">
              How it works
            </Heading>
            <Text
              color="#fff"
              fontWeight={400}
              fontSize="20px"
              mt="30px"
              lineHeight="122%"
            >
              Delegate your funds to help support Ukrainians during this wild
              time.
              <br />
              <Box mt="30px">
                Project Sunflower allows you to invest your money in an Interest
                generating pool, used for collateralized loans. You still hold
                on to the exact amount you invested and can get it back any
                time. We take the returns made off using your assets as
                collateral to support Ukraine’s defense efforts.
              </Box>
            </Text>
          </Box>
          <Box mt="88px" width="670px">
            <Heading color="#fff" fontWeight="bold" fontSize="48">
              Where the money is going
            </Heading>
            <Text
              color="#fff"
              fontWeight={400}
              fontSize="20px"
              mt="30px"
              lineHeight="122%"
            >
              We are donating all the yield generated to X organization.
              Contract address: 0x...........
            </Text>
          </Box>
        </Box>
        <Box>
          <Image src="/wewantyouryield.png" />
        </Box>
      </Flex>
    </Root>
  )
}

export default About
