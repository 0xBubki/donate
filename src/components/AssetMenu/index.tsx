import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Box, Text } from '@chakra-ui/layout'
import { ChevronDownIcon } from '@heroicons/react/outline'
import CoinList from '../../assets/tokenlist.json'

enum Assets {
  eth = 'WETH',
  usdc = 'USDC',
  usdt = 'USDT',
  dai = 'DAI',
  btc = 'WBTC'
}

const eth_2_assets = {
  WETH: { text: 'WETH', symbol: './' },
  USDC: { text: 'USDC', symbol: './' },
  USDT: { text: 'USDT', symbol: './' },
  DAI: { text: 'DAI', symbol: './' },
  WBTC: { text: 'WBTC', symbol: './' }
}

const Tokens = CoinList.tokens
const assetList = ['WETH', 'WBTC', 'USDC', 'USDT', 'DAI']

const TokenSymbols = Tokens.reduceRight((prev: any, { symbol, logoURI }) => {
  if (assetList.includes(symbol)) {
    prev[symbol] = logoURI
  }
  return prev
}, {})

const AssetMenu = () => {
  const [selected, select] = useState<Assets>(Assets.eth)

  return (
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
          >
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="space-around"
              alignContent="center"
              alignItems="center"
            >
              <img
                src={TokenSymbols[selected]}
                alt={selected}
                className="h-6 w-6"
              />
              <Text>{eth_2_assets[selected].text}</Text>
              <ChevronDownIcon className="h-5 w-5" />
            </Box>
          </MenuButton>

          <MenuList
            backgroundColor="#5c8abc"
            _active={{ bg: '5c8abc' }}
            _focus={{ bg: '#5c8abc' }}
          >
            {Object.values(Assets).map((val, index) => (
              <MenuItem
                _focus={{ bg: '#5c8abc' }}
                _active={{ bg: '5c8abc' }}
                _hover={{ bg: '#5c8abc' }}
                onClick={(_) => select(val)}
                key={index}
              >
                {' '}
                {val}{' '}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default AssetMenu
