/* eslint-disable @next/next/no-img-element */
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Link
} from '@chakra-ui/react'
import Davatar from '@davatar/react'
import {
  ChevronDownIcon,
  GlobeAltIcon,
  LoginIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import { useWallet } from '../../context/wallet-provider'
import { shorten } from '../../utils/shorten'
import { NavButton } from './NavButton'
import { NavDrawerItem, NavItem } from './NavItem'

const navItems = [
  { text: 'Stake', href: '/stake' },
  { text: 'Donate', href: '/donate' },
  { text: 'Explore NFTs', href: '/explore' },
  { text: 'About', href: '/about' }
]

export const Header = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navItems = [
    { text: 'Leaderboard', href: '/leaderboard' },
    { text: 'Stake', href: '/stake' },
    { text: 'Donate', href: '/donate' },
    { text: 'Mint', href: '/mint' },
    { text: 'About', href: '/about' }
  ]

  return (
    <header>
      <Box width="100%" height="100%">
        <Stack
          direction={['column', 'column', 'row']}
          shadow="sm"
          px={2}
          py={4}
        >
          <HStack justifyContent={['space-between']} w={'full'}>
            <Box fontWeight="bold" fontSize={[30, 40, 40, 50]} marginX="1rem">
              <Link href="/">🇺🇦</Link>
            </Box>

            <HStack>
              <HStack
                px={[4, 4, 0]}
                display={['none', 'none', 'none', 'flex']}
                gap={[4, 4, 4, 6]}
                mr={4}
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
              <NavButton
                backgroundColor="transparent"
                display={['flex', 'flex', 'flex', 'none']}
                color="white"
                _hover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }}
                borderRadius="100%"
                onClick={onOpen}
              >
                {isOpen ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </NavButton>
            </HStack>
          </HStack>

          <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody background="#005BBB" px={2}>
                {navItems.map((navItem, index) => (
                  <NavDrawerItem key={index} href={navItem.href}>
                    {navItem.text}
                  </NavDrawerItem>
                ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Stack>
      </Box>
    </header>
  )
}
