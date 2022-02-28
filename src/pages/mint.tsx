import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Button, Image, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { InputNumber } from '../components/InputNumber'

import { useTranslation } from '../utils/use-translation'

const localisation = {
  en: {
    mintButton: 'Mint NFT',
    connectWallet: 'Connect Wallet'
  },
  fr: {
    // @todo translate
    mintButton: 'Mint NFT',
    connectWallet: 'Connect Wallet'
  }
}

type MintState = 'inactive' | 'active' | 'finished'

const MintPage: NextPage = () => {
  const router = useRouter()
  const [mintState, setMintState] = useState<MintState>()
  const [walletConnected, setWalletConnected] = useState(true)
  const [mintCount, setMintCount] = useState(1)
  const translate = useTranslation(localisation)

  // @dev set 'mintState' based on url params
  // @todo - update to being based on contract state

  useEffect(() => {
    setMintState(
      router.query?.mintState === 'inactive'
        ? 'inactive'
        : router.query?.mintState === 'finished'
        ? 'finished'
        : 'active'
    )
  }, [router.query?.mintState])

  return (
    <Flex direction="row" width="100%" height="100%">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:gap-8 md:grid-cols-12">
          <div className="md:col-span-5 mb-8">
            <Box rounded="3xl" bg="white" overflow={'hidden'}>
              <Image src="/example-nft-2.png" alt="Example NFT" />
              <Flex justifyContent={'space-between'} p="4">
                <Text textColor="black" fontWeight={'bold'}>
                  Bubki NFTs
                </Text>
                <Text textColor="black" fontWeight={'bold'}>
                  0.05 ETH each
                </Text>
              </Flex>
            </Box>
          </div>
          <div className="md:col-start-7 md:col-span-5">
            <VStack spacing={6} align="stretch">
              <Box>
                <Text
                  as="span"
                  px={4}
                  py="5px"
                  bg="whiteAlpha.400"
                  rounded="xl"
                  fontWeight="semibold"
                  fontSize="20px"
                  display="inline-block"
                >
                  {mintState === 'active' && '2 / 10000 minted'}
                  {mintState === 'inactive' && 'Available from March 4th, 2022'}
                  {mintState === 'finished' && '10000 / 10000 minted'}
                </Text>
              </Box>

              <Heading fontSize={48} lineHeight={1.33}>
                Bubki NFTs
              </Heading>

              <Text as="p" fontSize="20px">
                NFT project description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Text>

              {/* Minting is active */}
              {mintState === 'active' && (
                <VStack spacing={8} align="stretch">
                  <Flex alignItems={'center'} gap="6">
                    <InputNumber onChange={(value) => setMintCount(value)} />
                    <Text fontSize="24px" fontWeight="bold">
                      {Math.round(mintCount * 0.05 * 100) / 100} ETH
                    </Text>
                  </Flex>

                  <VStack spacing={4} align="stretch" maxWidth="320px">
                    <Button
                      width="100%"
                      onClick={() => alert('Mint')}
                      fontSize="24px"
                      py="27px"
                      colorScheme="yellow"
                      style={{
                        boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                        borderRadius: '12px'
                      }}
                    >
                      {translate('mintButton')}
                    </Button>
                    <Text textAlign="center">Max 20 per transaction</Text>
                  </VStack>
                </VStack>
              )}

              {/* Minting has not started yet & wallet not connected */}
              {mintState === 'inactive' && !walletConnected && (
                <VStack spacing={4} align="stretch" maxWidth="300px">
                  <Button
                    width="100%"
                    // @todo - connect wallet
                    onClick={() => alert('Connect Wallet')}
                    fontSize="24px"
                    py={6}
                    colorScheme="yellow"
                    style={{
                      boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                      borderRadius: '12px'
                    }}
                  >
                    {translate('connectWallet')}
                  </Button>
                </VStack>
              )}

              {/* Minting has not started yet & wallet connected */}
              {mintState === 'inactive' && walletConnected && (
                <Box>
                  <Button
                    as="a"
                    href="https://twitter.com/"
                    target="_blank"
                    textColor="black"
                    bg="white"
                    rounded="xl"
                  >
                    Follow @TwitterHandle
                  </Button>
                </Box>
              )}

              {/* Minting has finished */}
              {mintState === 'finished' && (
                <Box>
                  <Button
                    as="a"
                    href="https://opensea.io/"
                    target="_blank"
                    textColor="black"
                    bg="white"
                    rounded="xl"
                    rightIcon={
                      <Image
                        height={24}
                        width={26}
                        src="/icons/opensea-ship.svg"
                        alt="ETH Logo"
                      />
                    }
                  >
                    Browse on Opensea
                  </Button>
                </Box>
              )}
            </VStack>
          </div>
        </div>
      </div>
    </Flex>
  )
}

export default MintPage
