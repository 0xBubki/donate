import { useState, useEffect, useMemo, useCallback } from 'react'
import type { NextPage } from 'next'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Button, Image, VStack, useToast, AspectRatio } from '@chakra-ui/react'
import { InputNumber } from '../components/InputNumber'
import { ERC721Service } from '../services/ERC721Service'
import { useTranslation } from '../utils/use-translation'
import { useWallet } from '../context/wallet-provider'
import { BigNumber } from 'ethers'

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

type BlockchainError = { message: string }

const tokenAddress =
  process.env.NEXT_PUBLIC_NFT_MINT_CONTRACT_ADDRESS ||
  '0xFdfFB8f724322dAdb0FeC710c081E7fc3537DBAf'

const successUrl = (id: string = '1') => {
  return `https://testnets.opensea.io/assets/${tokenAddress}/${id}`
}

const MintPage: NextPage = () => {
  const translate = useTranslation(localisation)
  const toast = useToast()

  // UI States
  const [mintCount, setMintCount] = useState(1)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // Contract States
  const { activateBrowserWallet, account, library } = useWallet()
  const [totalSupply, setTotalSupply] = useState(0)
  const [maxSupply, setMaxSupply] = useState(5000)
  const [isSaleActive, setIsSaleActive] = useState<boolean | null>(null)
  const [walletConnected, setWalletConnected] = useState(true)

  const isSoldOut = useMemo(() => {
    return totalSupply >= maxSupply
  }, [maxSupply, totalSupply])

  const contract = useMemo(() => {
    return new ERC721Service(library, tokenAddress, account)
  }, [library, account])

  useEffect(() => {
    if (account) {
      contract?.isSaleActive()?.then((response) => {
        setIsSaleActive(!!response)
      })
      contract?.totalSupply()?.then((response) => {
        setTotalSupply(BigNumber.from(response).toNumber())
      })
      contract?.maxSupply()?.then((response) => {
        setMaxSupply(BigNumber.from(response).toNumber())
      })
    }
  }, [account, library, contract])

  useEffect(() => {
    setWalletConnected(!!account)
  }, [account])

  const handleMint = useCallback(async () => {
    setButtonDisabled(true)

    try {
      const res = await contract.resMint(mintCount)

      // console.log({ res })

      // @todo - handle response. Show toast with link to tx? Or redirect to new view?

      toast({
        position: 'bottom-right',
        containerStyle: {
          marginRight: '2rem',
          marginBottom: '2rem'
        },
        render: () => (
          <Box color="white" p={5} rounded="2xl" bg="green.400">
            <Text fontSize="lg" fontWeight="bold">
              Success
            </Text>
            <a
              style={{
                textDecoration: 'underline'
              }}
              href={successUrl('2')}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </Box>
        )
      })
    } catch (err) {
      setButtonDisabled(false)
      toast({
        title: 'Uh oh.',
        description: "The transaction didn't go through, try again.",
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
        containerStyle: {
          marginRight: '2rem',
          marginBottom: '2rem'
        }
      })
    } finally {
      setButtonDisabled(false)
    }
  }, [contract, mintCount, toast])

  return (
    <Flex direction="row" width="100%" height="100%" pb={10}>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:gap-8 md:grid-cols-12">
          <div className="md:col-span-5 mb-8">
            <Box rounded="3xl" bg="white" overflow={'hidden'}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/example-nft-2.png"
                  alt="Example NFT"
                  objectFit="cover"
                />
              </AspectRatio>
              <Flex justifyContent={'space-between'} p="4">
                <Text textColor="black" fontWeight="semibold">
                  Bubki NFTs
                </Text>
                <Flex
                  alignItems="center"
                  gap={2}
                  textColor="black"
                  fontWeight="semibold"
                >
                  <Text>0.05</Text>

                  <Image src="/eth.svg" height={5} width={5} alt="" />
                  <Text>each</Text>
                </Flex>
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
                  {!isSaleActive && 'Available from March 4th, 2022'}

                  {isSaleActive && (
                    <Text display="flex" alignItems="center" gap={2}>
                      <Text fontWeight="black">{totalSupply} / 10,000</Text>
                      <Text>minted</Text>
                    </Text>
                  )}
                </Text>
              </Box>

              <Heading fontSize={48} lineHeight={1.33}>
                Bubki NFTs
              </Heading>

              <Text as="p" fontSize="20px">
                Blending folk art-inspired motifs in a generative NFT project of
                10,000 editions, Bubki aims to harness the power of web3 to
                rally material support for Ukrainian organizations at this
                pivotal moment.
              </Text>

              {/* Minting is active */}
              {isSaleActive && (
                <VStack spacing={8} align="stretch">
                  {walletConnected && (
                    <Flex alignItems={'center'} gap="6">
                      <InputNumber onChange={(value) => setMintCount(value)} />
                      <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        whiteSpace="nowrap"
                      >
                        {Math.round(mintCount * 0.05 * 100) / 100} ETH
                      </Text>
                    </Flex>
                  )}

                  <VStack spacing={4} align="stretch" maxWidth="320px">
                    {walletConnected ? (
                      <>
                        <Button
                          width="100%"
                          onClick={handleMint}
                          fontSize="24px"
                          py="27px"
                          colorScheme="yellow"
                          style={{
                            boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                            borderRadius: '12px'
                          }}
                          disabled={buttonDisabled}
                        >
                          {translate('mintButton')}
                        </Button>
                        <Text textAlign="center">Max 100 per transaction</Text>
                      </>
                    ) : (
                      <Button
                        width="100%"
                        onClick={activateBrowserWallet}
                        fontSize="24px"
                        py="27px"
                        colorScheme="yellow"
                        style={{
                          boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                          borderRadius: '12px'
                        }}
                      >
                        Connect Wallet
                      </Button>
                    )}
                  </VStack>
                </VStack>
              )}

              {/* Not sold out, Minting not active, wallet not connected */}
              {!isSoldOut && !isSaleActive && !walletConnected && (
                <VStack spacing={4} align="stretch" maxWidth="300px">
                  <Button
                    width="100%"
                    // @todo - connect wallet
                    onClick={activateBrowserWallet}
                    fontSize="24px"
                    py="27px"
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

              {/* Minting not active, wallet is connected */}
              {isSaleActive === false && walletConnected && (
                <Box>
                  <Button
                    as="a"
                    href="https://twitter.com/"
                    target="_blank"
                    textColor="black"
                    fontSize="24px"
                    p="27px"
                    bg="white"
                    rounded="xl"
                  >
                    Follow @TwitterHandle
                  </Button>
                </Box>
              )}

              {/* Minting has finished */}
              {isSoldOut && (
                <Box>
                  <Button
                    as="a"
                    href="https://opensea.io/"
                    target="_blank"
                    textColor="black"
                    bg="white"
                    fontSize="24px"
                    p="27px"
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
