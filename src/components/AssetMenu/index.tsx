import React from 'react'
import { Menu, MenuButton } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Box, Text } from '@chakra-ui/layout'
import CoinList from '../../assets/tokenlist.json'

const Tokens = CoinList.tokens
const assetList = ['USDC']

const TokenSymbols = Tokens.reduceRight((prev: any, { symbol, logoURI }) => {
  if (assetList.includes(symbol)) {
    prev[symbol] = logoURI
  }
  return prev
}, {})

const AssetMenu = () => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          _active={{ bg: '5c8abc' }}
          _hover={{ bg: '#5c8abc' }}
          _focus={{ bg: '#5c8abc' }}
          display="flex"
          justifyContent="space-around"
          width="150px"
          borderRadius="15px"
          alignItems="center"
          backgroundColor="#5c8abc"
          isActive={isOpen}
          as={Button}
          cursor="auto"
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
          >
            <img src={TokenSymbols['USDC']} alt="USDC" className="h-6 w-6" />
            <Text>USDC</Text>
          </Box>
        </MenuButton>
      </>
    )}
  </Menu>
)

export default AssetMenu
