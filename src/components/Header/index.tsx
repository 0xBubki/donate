/* eslint-disable @next/next/no-img-element */
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import Davatar from '@davatar/react'
import { shorten } from '../../utils/shorten'
import { useWallet } from '../../context/wallet-provider'
import { NavButton } from './NavButton'
import {
  ChevronDownIcon,
  GlobeAltIcon,
  LoginIcon
} from '@heroicons/react/outline'
import { NavItem } from './NavItem'

export const Header = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const navItems = [
    { text: 'Stake', href: '/stake' },
    { text: 'Donate', href: '/donate' },
    { text: 'Explore NFTs', href: '/explore' },
    { text: 'About', href: '/about' }
  ]

  return (
    <header>
      <Box width="100%">
        <HStack shadow="sm" justifyContent="space-between" px={2} py={4}>
          <Box fontWeight="bold" fontSize={50} marginX="1rem">
            🇺🇦
          </Box>

          <HStack>
            {navItems.map((navItem, index) => (
              <NavItem key={index} href={navItem.href}>
                {navItem.text}
              </NavItem>
            ))}
            <NavButton>
              <Flex alignItems="center">
                <GlobeAltIcon className="h-6 w-6" />
                <Text marginX="8px">EN</Text>
                <ChevronDownIcon className="h-4 w-4" />
              </Flex>
            </NavButton>

            <NavButton ml="30px" onClick={activateBrowserWallet}>
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
                <Flex alignItems="center" gap={2} paddingX={4}>
                  <Text>Connect wallet</Text>
                  <LoginIcon className="h-5 w-5" />
                </Flex>
              )}
            </NavButton>
          </HStack>
        </HStack>
      </Box>
    </header>
  )
}
