import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Box, Text } from '@chakra-ui/layout'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { CryptoIcon } from 'next-crypto-icons'

// import CoinList from '../../assets/tokenlist.json'

// const Tokens = CoinList.tokens
// const assetList = ['WETH', 'WBTC', 'USDC', 'USDT', 'DAI']

enum Assets {
  usdc = 'USDC'
}

const eth_2_assets = {
  USDC: { text: 'USDC', symbol: './' }
}

export const AssetMenu = () => {
  const [selected, select] = useState<Assets>(Assets.usdc)
  const assetName = selected.startsWith('W') ? selected.slice(1) : selected

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
            cursor="inherit"
          >
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="space-around"
              alignContent="center"
              alignItems="center"
            >
              <CryptoIcon
                name={assetName.toLowerCase()}
                style="white"
                width={24}
                height={24}
              />
              <Text>{eth_2_assets[selected].text}</Text>
            </Box>
          </MenuButton>
        </>
      )}
    </Menu>
  )
}
