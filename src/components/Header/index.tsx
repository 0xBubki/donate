/* eslint-disable @next/next/no-img-element */
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Link,
  Button
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
  { text: 'Donate', href: '/donate' },
  { text: 'Stake', href: '/stake' },
  { text: 'Explore NFTs', href: '/explore' },
  { text: 'About', href: '/about' }
]

export const Header = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navItems = [
    { text: 'Stake', href: '/stake' },
    { text: 'Mint', href: '/mint' },
    { text: 'Donate', href: '/donate' },
    { text: 'Leaderboard', href: '/leaderboard' },
    { text: 'About', href: '/about' }
  ]

  return (
    <header>
      <Stack direction={['column', 'column', 'row']} px={2} py={4}>
        <HStack justifyContent={['space-between']} w={'full'}>
          <Box ml={['none', '40px']} fontWeight="bold" fontSize={[30, 40, 40]}>
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
              <GlobeAltIcon className="w-6 h-6" />
              <Text>EN</Text>
              <ChevronDownIcon className="w-4 h-4" />
            </NavButton>

            <NavButton ml="30px" onClick={activateBrowserWallet}>
              {account ? (
                <>
                  <Box>
                    <Davatar size={25} address={account} />
                  </Box>
                  <Text>{ens || shorten(account)}</Text>
                </>
              ) : (
                <>
                  <Text>Connect</Text>
                  <LoginIcon className="w-5 h-5" />
                </>
              )}
            </NavButton>
            <Button
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
            </Button>
          </HStack>
        </HStack>
      </Stack>

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
    </header>
  )
}
