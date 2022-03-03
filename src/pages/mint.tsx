import { useState, useEffect, useMemo, useCallback } from 'react'
import type { NextPage } from 'next'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Button, Image, VStack, useToast, AspectRatio } from '@chakra-ui/react'
import { InputNumber } from '../components/InputNumber'
import { ERC721Service } from '../services/ERC721Service'
import { useTranslation } from '../utils/use-translation'
import { useWallet } from '../context/wallet-provider'
import { BigNumber } from 'ethers'
import { useEthers } from '@usedapp/core'
import { TranslatedParagraph } from '../components/TranslatedParagraph'

const translations = require('../../public/locales/mint.json')

type BlockchainError = { message: string }

// Mainnet
const tokenAddress = '0x5E96d69257b025d097863F3d69E9DcADb9a9810c'
const networkChainId = 1

// Rinkeby
// const tokenAddress = '0xFdfFB8f724322dAdb0FeC710c081E7fc3537DBAf'
// const networkChainId = 4

const collectionUrl = `https://opensea.io/collection/bubki-nfts`

const MintPage: NextPage = () => {
  const translate = useTranslation(translations)
  const toast = useToast()
  const { chainId } = useEthers()

  // UI States
  const [mintCount, setMintCount] = useState(1)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonConnecting, setButtonConnecting] = useState(false)

  // Contract States
  const { activateBrowserWallet, account, library } = useWallet()
  const [totalSupply, setTotalSupply] = useState(0)
  const [maxSupply, setMaxSupply] = useState(5000)
  const [isSaleActive, setIsSaleActive] = useState<boolean | null>(null)
  const [walletConnected, setWalletConnected] = useState(true)

  const isSoldOut = useMemo(() => {
    return totalSupply >= maxSupply
  }, [maxSupply, totalSupply])

  const isCorrectChainId = useMemo(() => {
    return chainId === networkChainId
  }, [chainId])

  const contract = useMemo(() => {
    return new ERC721Service(library, tokenAddress, account)
  }, [library, account])

  const handleConnectWallet = () => {
    setButtonConnecting(true)
    activateBrowserWallet()
    setTimeout(() => {
      setButtonConnecting(false)
    }, 5000)
  }

  useEffect(() => {
    if (account && isCorrectChainId) {
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
  }, [account, library, contract, chainId, isCorrectChainId])

  useEffect(() => {
    if (account) {
      setButtonConnecting(false)
    }
    setWalletConnected(!!account)
  }, [account])

  const handleMint = useCallback(async () => {
    setButtonDisabled(true)

    try {
      await contract.resMint(mintCount)

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
              href={collectionUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </Box>
        )
      })
    } catch (err) {
      console.log(err)
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
      <div className="mx-auto p-3 sm:p-8">
        <div className="grid sm:gap-8 sm:grid-cols-12">
          <div className="sm:col-span-5 mb-8">
            <Box rounded="3xl" bg="white" overflow={'hidden'}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/example-nft-2.png"
                  alt="Example NFT"
                  objectFit="cover"
                />
              </AspectRatio>
              <Flex
                justifyContent={'space-between'}
                p="4"
                className="gap-2 text-xs xs:text-lg sm:text-xl"
              >
                <Text
                  textColor="black"
                  fontWeight="bold"
                  fontSize={['xs', 'sm', 'lg']}
                >
                  Bubki NFTs
                </Text>
                <Flex
                  alignItems="center"
                  gap={1}
                  textColor="black"
                  fontWeight="semibold"
                  fontSize={['xs', '0.82rem', 'md']}
                >
                  <Text>0.05</Text>
                  <Image src="/eth.svg" height={5} width={5} alt="" />
                  <Text>each</Text>
                </Flex>
              </Flex>
            </Box>
          </div>

          <div className="sm:col-start-7 sm:col-span-5">
            <div className="flex flex-col items-center sm:items-start gap-6">
              {isSaleActive && (
                <Box>
                  <Text
                    as="span"
                    px={4}
                    py="5px"
                    bg="whiteAlpha.400"
                    rounded="xl"
                    fontWeight="semibold"
                    fontSize={['lg', '2xl']}
                    display="inline-block"
                  >
                    <Text display="flex" alignItems="center" gap={2}>
                      <Text fontWeight="black">{totalSupply} / 10,000</Text>
                      <Text>minted</Text>
                    </Text>
                  </Text>
                </Box>
              )}

              <Heading fontSize={48} lineHeight={1.33}>
                Bubki NFTs
              </Heading>

              <TranslatedParagraph
                translations={translations}
                paragraphs={['p1', 'p2']}
              />

              {/* Minting is active */}
              {isSaleActive && (
                <VStack spacing={8} align="stretch" justify="center">
                  {walletConnected && (
                    <Flex alignItems={'center'} className="gap-2 xs:gap-4">
                      <InputNumber
                        isDisabled={buttonDisabled}
                        onChange={(value) => setMintCount(value)}
                      />
                      <Text
                        display="flex"
                        className="text-xs flex-col xs:flex-row xs:text-lg"
                        // fontSize={["xs", "lg"]}
                        // flexDirection={['column', 'row']}
                        fontWeight="semibold"
                        whiteSpace="nowrap"
                        alignItems="stretch"
                        gap={2}
                      >
                        <span>{Math.round(mintCount * 0.05 * 100) / 100}</span>
                        <span>ETH</span>
                      </Text>
                    </Flex>
                  )}

                  <VStack spacing={8} align="stretch" maxWidth="320px">
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
                          disabled={buttonDisabled || !isCorrectChainId}
                        >
                          {buttonDisabled
                            ? 'Minting...'
                            : !isCorrectChainId
                            ? 'Change to ETH mainnet'
                            : translate('mintButton')}
                        </Button>
                        <Text
                          color="gray.400"
                          textAlign="center"
                          fontWeight="bolder"
                        >
                          Max 100 per transaction
                        </Text>
                      </>
                    ) : (
                      <Button
                        width="100%"
                        onClick={() => handleConnectWallet()}
                        fontSize="24px"
                        disabled={buttonConnecting}
                        py="27px"
                        px="24px"
                        colorScheme="yellow"
                        style={{
                          boxShadow: '0 0 0 8px rgba(255, 213, 0, 0.2)',
                          borderRadius: '12px'
                        }}
                      >
                        {translate('connectWallet')}
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
                    onClick={handleConnectWallet}
                    fontSize="24px"
                    disabled={buttonConnecting}
                    py="27px"
                    px="24px"
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
            </div>
          </div>
        </div>
      </div>
    </Flex>
  )
}

export default MintPage
