/* eslint-disable @next/next/no-img-element */
import { Box, Flex, HStack, Text, Stack, Show } from '@chakra-ui/layout'
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
        <Stack
          direction={['column', 'column', 'row']}
          shadow="sm"
          px={2}
          py={4}
        >
          <HStack justifyContent={['space-between']} w={'full'}>
            <Box fontWeight="bold" fontSize={[30, 40, 40, 50]} marginX="1rem">
              🇺🇦
            </Box>

            <HStack>
              <HStack
                px={[4, 4, 0]}
                display={['none', 'none', 'flex']}
                justifyContent={[
                  'space-between',
                  'space-between',
                  'flex-start'
                ]}
                width="auto"
              >
                {navItems.map((navItem, index) => (
                  <NavItem key={index} href={navItem.href}>
                    {navItem.text}
                  </NavItem>
                ))}
              </HStack>
              <NavButton>
                <Flex alignItems="center">
                  <GlobeAltIcon className="w-6 h-6" />
                  <Text marginX="8px">EN</Text>
                  <ChevronDownIcon className="w-4 h-4" />
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
                    <LoginIcon className="w-5 h-5" />
                  </Flex>
                )}
              </NavButton>
            </HStack>
          </HStack>

          <HStack
            px={[4, 4, 0]}
            pt={[2, 2, 0, 0]}
            display={['flex', 'flex', 'none']}
            justifyContent={[
              'space-between',
              'space-between',
              'flex-start',
              'flex-start'
            ]}
          >
            {navItems.map((navItem, index) => (
              <NavItem key={index} href={navItem.href}>
                {navItem.text}
              </NavItem>
            ))}
          </HStack>
        </Stack>
      </Box>
    </header>
  )
}
