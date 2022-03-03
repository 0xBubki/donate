/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'
import { useTranslation } from '../../utils/use-translation'

const localization = require('../../../public/locales/navigation.json')

import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Button,
  Link
} from '@chakra-ui/react'
import Davatar from '@davatar/react'
import {
  FireIcon,
  InformationCircleIcon,
  KeyIcon,
  LoginIcon,
  MenuIcon,
  PlusCircleIcon,
  XIcon
} from '@heroicons/react/outline'
import { useWallet } from '../../context/wallet-provider'
import { shorten } from '../../utils/shorten'
import { NavButton } from './NavButton'
import { NavDrawerItem, NavItem } from './NavItem'
import LanguageMenu from './LanguageMenu'

// @ts-ignore
import { SocialIcon } from 'react-social-icons'
import { Logo } from '../Logo'

const ConnectWallet = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const translate = useTranslation(localization)

  return (
    <NavButton onClick={activateBrowserWallet}>
      {account ? (
        <>
          <Box>
            <Davatar size={25} address={account} />
          </Box>
          <Text>{ens || shorten(account)}</Text>
        </>
      ) : (
        <Flex className="center" gap={2}>
          <Text className="capitalize">{translate('connect')}</Text>
          <LoginIcon className="w-4 h-4" />
        </Flex>
      )}
    </NavButton>
  )
}

export const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const translate = useTranslation(localization)

  const navItems = [
    {
      text: translate('home'),
      href: '/'
    },
    {
      text: translate('stake'),
      href: '/stake',
      icon: <KeyIcon className="h-6 w-6" />
    },
    // {
    //   text: translate('donate'),
    //   href: '/donate',
    //   icon: <HeartIcon className="h-6 w-6" />
    // },
    {
      text: translate('mint'),
      href: '/mint',
      icon: <PlusCircleIcon className="h-6 w-6" />
    },
    {
      text: translate('leaderboard'),
      href: '/leaderboard',
      icon: <FireIcon className="h-6 w-6" />
    },
    {
      text: translate('about'),
      href: '/about',
      icon: <InformationCircleIcon className="h-6 w-6" />
    }
  ]

  return (
    <header>
      <Stack direction={['column', 'column', 'row']} px={2} py={4}>
        <HStack
          justifyContent={['space-between']}
          w={'full'}
          px={{ base: 0, lg: '2rem' }}
          margin="0px !important"
        >
          {/* Bubki Flag Button */}
          <Logo />

          {/* Desktop Links */}
          <HStack
            px={[4, 4, 0]}
            display={['none', 'none', 'none', 'flex']}
            gap={{ lg: '0.4rem', xl: '1.5rem' }}
            // width="fit-content"
            mr={4}
            // width="auto"
          >
            {navItems.map((navItem, index) => (
              <NavItem key={index} href={navItem.href}>
                <Text className="capitalize">{navItem.text}</Text>
              </NavItem>
            ))}
          </HStack>

          <Flex gap={2}>
            <Flex gap={4}>
              {/* Language Menu */}
              <div className="hidden lg:flex lg:items-center">
                <LanguageMenu />
              </div>

              {/* Connect Wallet Button */}
              <ConnectWallet />
            </Flex>

            {/* Drawer Toggle Button */}
            <Button
              backgroundColor="transparent"
              display={['flex', 'flex', 'flex', 'none']}
              color="white"
              margin="0px !important"
              padding="0px !important"
              onClick={onOpen}
            >
              {isOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </Button>
          </Flex>
        </HStack>
      </Stack>

      {/* Mobile Navbar */}
      <Drawer
        placement={'top'}
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="#005BBB" padding={8}>
            <Flex direction="column" justify="space-around" height="100%">
              {/* Top Wrapper */}
              {/* Close Icon */}
              <div className="flex justify-end">
                <Button
                  backgroundColor="transparent"
                  color="white"
                  paddingX={0}
                  _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  borderRadius="100%"
                  onClick={onToggle}
                >
                  <XIcon className="w-7 h-7" />
                </Button>
              </div>

              {/* Mapping through Links */}
              <Flex direction="column" gap={2}>
                {navItems.map((navItem, index) => (
                  <NavDrawerItem
                    onClick={onToggle}
                    key={index}
                    href={navItem.href}
                  >
                    <Text lineHeight={1} padding="0" fontSize={'2rem'}>
                      {navItem.text}
                    </Text>
                  </NavDrawerItem>
                ))}
              </Flex>

              {/* Twitter and Language Menu Wrapper */}
              <Flex gap={4} justify="space-around" align="center">
                <Flex gap={4}>
                  {/* Twitter Link - URL SHOULD BE UPDATED */}
                  <a href="https://twitter.com/0xBubki">
                    <img
                      src={'/icons/bubki-t.png'}
                      alt="Twitter Link"
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://opensea.io/collection/bubki-nfts">
                    <img
                      src={'/icons/bubki-os_2.png'}
                      alt="OpenSea Link"
                      width="50"
                      height="50"
                    />
                  </a>
                </Flex>

                {/* Language Menu */}
                <LanguageMenu />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
