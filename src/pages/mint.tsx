import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Button, Image, VStack, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
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

type MintState = 'inactive' | 'active' | 'finished'

const MintPage: NextPage = () => {
  const router = useRouter()
  const [mintState, setMintState] = useState<MintState>()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [walletConnected, setWalletConnected] = useState(true)
  const [totalSupply, setTotalSupply] = useState(0)
  const [mintCount, setMintCount] = useState(1)
  const translate = useTranslation(localisation)
  const { activateBrowserWallet, account, library } = useWallet()
  const toast = useToast()

  // @dev set 'mintState' based on url params
  // @todo - update to being based on contract state

  useEffect(() => {
    const contract = new ERC721Service(
      library,
      '0xFdfFB8f724322dAdb0FeC710c081E7fc3537DBAf',
      account
    )

    contract.totalSupply().then((response) => {
      setTotalSupply(BigNumber.from(response).toNumber())
    })
  }, [])

  useEffect(() => {
    setMintState(
      router.query?.mintState === 'inactive'
        ? 'inactive'
        : router.query?.mintState === 'finished'
        ? 'finished'
        : 'active'
    )
  }, [router.query?.mintState])

  useEffect(() => {
    setWalletConnected(!!account)
  }, [account])

  const handleMint = async () => {
    // @todo - pass actual tokenAddress once added
    const tokenAddress = '0xFdfFB8f724322dAdb0FeC710c081E7fc3537DBAf'

    try {
      setButtonDisabled(true)
      const response = await new ERC721Service(
        library,
        tokenAddress,
        account
      ).mint(mintCount)
      // @todo - handle response. Show toast with link to tx? Or redirect to new view?
    } catch (err) {
      setButtonDisabled(false)
      console.error(err)
      toast({
        title: 'Uh oh.',
        // description: err.message,
        description: 'too tired to fix this shit',
        status: 'error',
        isClosable: true
      })
    }
  }

  return (
    <Flex direction="row" width="100%" height="100%" pb={10}>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:gap-8 md:grid-cols-12">
          <div className="md:col-span-5 mb-8">
            <Box rounded="3xl" bg="white" overflow={'hidden'}>
              <Image src="/example-nft-2.png" alt="Example NFT" />
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
                  <Image src="/eth.svg" height={5} width={5} />
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
                  {mintState === 'active' && (
                    <Text display="flex" alignItems="center" gap={2}>
                      <Text fontWeight="black">{totalSupply} / 10,000</Text>
                      <Text>minted</Text>
                    </Text>
                  )}
                  {mintState === 'inactive' && 'Available from March 4th, 2022'}
                  {mintState === 'finished' && (
                    <Text display="flex" alignItems="center" gap={2}>
                      <Text fontWeight="black">10000 / 10000</Text>
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
              {mintState === 'active' && (
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

              {/* Minting has not started yet & wallet not connected */}
              {mintState === 'inactive' && !walletConnected && (
                <VStack spacing={4} align="stretch" maxWidth="300px">
                  <Button
                    width="100%"
                    // @todo - connect wallet
                    onClick={() => alert('Connect Wallet')}
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

              {/* Minting has not started yet & wallet connected */}
              {mintState === 'inactive' && walletConnected && (
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
              {mintState === 'finished' && (
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
