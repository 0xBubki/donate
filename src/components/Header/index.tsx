/* eslint-disable @next/next/no-img-element */
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { formatEther } from 'ethers/lib/utils'
import Davatar from '@davatar/react'
import { shorten } from '../../utils/shorten'
import { useWallet } from '../../context/wallet-provider'
import { NavButton } from "./NavButton"

export const Header = () => {
  const { activateBrowserWallet, ens, account, etherBalance } = useWallet()

  return (
    <Box width="100vw">
      <HStack shadow="sm" justifyContent="space-between" px={10} py={4}>
        <Box fontWeight="bold" fontSize={50}>
          🇺🇦
        </Box>
        <div>
          <NavButton>
            <Flex alignItems="center">
              <img
                src="https://img.icons8.com/material-outlined/50/000000/globe--v2.png"
                style={{ height: 29 }}
                alt=""
              />
              <span style={{ marginLeft: 10, marginRight: 10 }}> EN</span>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png"
                style={{ height: 30 }}
                alt=""
              />
            </Flex>
          </NavButton>

          <NavButton
            style={{ borderRadius: 25, height: 58, width: 214 }}
            ml="30px"
            onClick={activateBrowserWallet}
          >
            {account ? (
              <Flex alignItems="center">
                <Flex
                  alignItems="center"
                  gap={2}
                  paddingY={1}
                  paddingX={2}
                  marginRight={1}
                  rounded="md"
                >
                  <Box>
                    <Davatar size={25} address={account} />
                  </Box>
                  <Text>{ens || shorten(account)}</Text>
                </Flex>
              </Flex>
            ) : (
              <Text paddingX={4}>Connect to wallet</Text>
            )}
          </NavButton>
        </div>
      </HStack>
    </Box>
  )
}