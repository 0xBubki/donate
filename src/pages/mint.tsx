import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import {
  Button,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import EmailSignup from '../components/EmailSignup'

import { useTranslation } from '../utils/use-translation'

const localisation = {
  en: {
    mintButton: 'Mint NFT'
  },
  fr: {
    // @todo translate
    mintButton: 'Mint NFT'
  }
}

type MintState = 'inactive' | 'active' | 'finished'

const MintPage: NextPage = () => {
  const router = useRouter()
  const [mintState, setMintState] = useState<MintState>()
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
    <Flex direction="row" width="100%" height="100%" px={8} py={8}>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 grid-cols-12">
          <div className="col-span-12 md:col-span-5">
            <Box rounded="3xl" bg="white" overflow={'hidden'}>
              <Image src="/example-nft.png" alt="Example NFT" />
              <Flex justifyContent={'space-between'} p="4">
                <Text textColor="black" fontWeight={'bold'}>
                  NFT Name
                </Text>
                <Text textColor="black" fontWeight={'bold'}>
                  2 ETH
                </Text>
              </Flex>
            </Box>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-5">
            <VStack spacing={6} align="stretch">
              <Box>
                <Text
                  as="span"
                  px={4}
                  py={2}
                  bg="whiteAlpha.400"
                  rounded="lg"
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
                NFT Name Goes Here
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
                  <Box maxWidth={190}>
                    <Flex
                      w="100%"
                      color="white"
                      fontWeight="bold"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <NumberInput
                        defaultValue={1}
                        min={1}
                        max={100}
                        alignItems="center"
                        gap="8px"
                        bg="whiteAlpha.400"
                        p="12px"
                        style={{ display: 'flex', borderRadius: 16 }}
                      >
                        <NumberDecrementStepper
                          bg="whiteAlpha.400"
                          padding="4"
                          border="none"
                          fontSize="24px"
                          lineHeight={'0'}
                          width={'40px'}
                          height={'40px'}
                          style={{
                            borderRadius: 12
                          }}
                        >
                          <Text mt="-0.5">-</Text>
                        </NumberDecrementStepper>
                        <NumberInputField
                          border={0}
                          padding="2"
                          fontWeight="bold"
                          textAlign="center"
                          style={{
                            borderRadius: 12
                          }}
                        />

                        <NumberIncrementStepper
                          bg="whiteAlpha.400"
                          padding="4"
                          border="none"
                          fontSize="24px"
                          width={'40px'}
                          height={'40px'}
                          style={{
                            borderRadius: 12
                          }}
                        >
                          <Text mt="-0.5">+</Text>
                        </NumberIncrementStepper>
                      </NumberInput>
                    </Flex>
                  </Box>

                  <Flex alignItems={'center'} gap="8">
                    <Button
                      onClick={() => alert('Mint')}
                      fontSize="24px"
                      py={6}
                      colorScheme="yellow"
                      style={{
                        boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                        borderRadius: '12px'
                      }}
                    >
                      {translate('mintButton')}
                    </Button>
                    <Text fontSize="32px" fontWeight="bold">
                      12 ETH
                    </Text>
                  </Flex>
                </VStack>
              )}

              {/* Minting has not started yet */}
              {mintState === 'inactive' && <EmailSignup />}

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
                        src="/opensea-ship.svg"
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
