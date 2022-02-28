import type { NextPage } from 'next'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import {
  Button,
  Grid,
  GridItem,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  VStack
} from '@chakra-ui/react'

import { useTranslation } from '../../utils/use-translation'

const localisation = {
  en: {
    mintButton: 'Mint NFT'
  },
  fr: {
    // @todo translate
    mintButton: 'Mint NFT'
  }
}

const MintPage: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Flex direction="row" width="100vw" height="100%">
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={['32px']}
        maxW={1300}
        mx="auto"
        py={20}
        px={6}
      >
        <GridItem colSpan={[12, null, 5]}>
          <Box rounded="3xl" bg="white" overflow={'hidden'}>
            <Image src="/example-nft.png" alt="Example NFT" />
            <Flex justifyContent={'space-between'} p="4">
              <Text fontWeight={'bold'}>NFT Name</Text>
              <Text fontWeight={'bold'}>2 ETH</Text>
            </Flex>
          </Box>
        </GridItem>

        <GridItem
          colSpan={[12, null, 6]}
          colStart={[1, null, 7]}
          textColor="white"
        >
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
                2 / 10000 minted
              </Text>
            </Box>

            <Heading fontSize={48} lineHeight={1.33}>
              NFT Name Goes Here
            </Heading>

            <Text as="p" fontSize="20px">
              NFT project description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
            <VStack spacing={8} align="stretch">
              <Box maxWidth={190}>
                <Flex
                  w="100%"
                  color="white"
                  fontWeight="bold"
                  alignItems={'center'}
                  justifyContent="center"
                >
                  <NumberInput
                    defaultValue={1}
                    min={1}
                    max={100}
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
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default MintPage
