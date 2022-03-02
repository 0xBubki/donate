import type { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { Skeleton } from '@chakra-ui/react'
import { SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from '../utils/use-translation'
import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { confetti, blastConfetti } from '../utils/confetti'
import axios from 'axios'
import { useCoingeckoPrice } from '@usedapp/coingecko'
import { headerSizingLg, headerSizingSm } from '../utils/sizing'

const RECEIVER_WALLET = '0x10E1439455BD2624878b243819E31CfEE9eb721C'
const localization = require('../../public/locales/common.json')

const Home: NextPage = () => {
  const [currentEthValue, setCurrentEthValue] = useState(0)
  const translate = useTranslation(localization)
  const etherPrice = useCoingeckoPrice('ethereum', 'usd')
  const etherPriceOrFallBack = etherPrice || 3000

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  useEffect(() => {
    axios
      .post(
        'https://eth-mainnet.alchemyapi.io/v2/06iuz9tXgQRzmTQ1B28oqPnz5lQDQ-YO',
        {
          jsonrpc: '2.0',
          id: 0,
          method: 'alchemy_getAssetTransfers',
          params: [
            {
              fromBlock: '0x0',
              toBlock: 'latest',
              toAddress: RECEIVER_WALLET,
              excludeZeroValue: true,
              category: ['external']
            }
          ]
        }
      )
      .then((response) => {
        filterTransactionsLowToHigh(response?.data?.result?.transfers)
      })
  }, [])

  const filterTransactionsLowToHigh = (arrayOfTransactions: {
    forEach(param: (tx: { value: number }) => void): void
  }) => {
    let sum = 0
    arrayOfTransactions.forEach((tx: { value: number }) => {
      sum += tx.value
    })

    setCurrentEthValue(sum)
  }

  useEffect(() => {
    /**
     * Every few seconds, blast confetti at a random location.
     */
    const interval = setInterval(() => {
      const x = 0.5
      const y = -0.01

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
      width="100%"
      height="100%"
      onClick={(evt: any) => {
        blastConfetti(evt, true)
      }}
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        <Flex direction="column" gap={16} align="center">
          <Heading>
            {translate('homepage-title')}{' '}
            <Text display="inline" color="ukraineYellow">
              Ukraine
            </Text>
          </Heading>

          <Flex direction="column" gap={2}>
            <Flex
              className="center flex-col xs:flex-row xs:gap-2"
              fontWeight="bold"
            >
              {currentEthValue === 0 ? (
                <Flex alignItems="center" justifyContent="center" gap={2}>
                  <Text fontSize={headerSizingLg}>$</Text>
                  <Skeleton height="48px" width={['120px', '320px']} />
                </Flex>
              ) : (
                <Text fontSize={headerSizingLg}>
                  {formatter // @ts-ignore
                    .format(etherPriceOrFallBack * currentEthValue)}
                </Text>
              )}

              <Heading fontSize={headerSizingSm}>
                {translate('donated')}
              </Heading>
            </Flex>

            <Text
              color="rgba(255, 255, 255, 0.88)"
              fontWeight="bold"
              fontSize={headerSizingSm}
            >
              <Flex alignItems="center" justifyContent="center" gap={2}>
                <span>Ξ</span>
                {currentEthValue === 0 ? (
                  <Skeleton height="30px" width="200px" />
                ) : (
                  <span>{currentEthValue.toFixed(2)}</span>
                )}
              </Flex>
            </Text>
          </Flex>

          <Flex
            direction="column"
            gap={4}
            align="center"
            width="100%"
            maxWidth="200px"
          >
            <NextLink href="/stake" passHref>
              <Button
                color="black"
                width="100%"
                borderRadius="25px"
                bg="ukraineYellow"
                _hover={{
                  bg: 'darkYellow'
                }}
                _active={{
                  bg: 'darkYellow'
                }}
              >
                {translate('stake')}
              </Button>
            </NextLink>

            <NextLink href="/mint" passHref>
              <Button
                color="black"
                bg="white"
                width="100%"
                borderRadius="25px"
                _hover={{
                  bg: '#DDD'
                }}
                _active={{
                  bg: '#DDD'
                }}
              >
                {translate('mint')}
              </Button>
            </NextLink>
          </Flex>
        </Flex>
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

export default Home
