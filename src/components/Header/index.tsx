/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'

import { useTranslation } from '../../utils/use-translation'

const germanTrans = require('../../../public/locales/de/navigation.json')
const englishTrans = require('../../../public/locales/en/navigation.json')
const spanishTrans = require('../../../public/locales/es/navigation.json')
const frenchTrans = require('../../../public/locales/fr/navigation.json')

const localisation = {
  de: germanTrans,
  en: englishTrans,
  es: spanishTrans,
  fr: frenchTrans
}

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
  HeartIcon,
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

const ConnectWallet = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const translate = useTranslation(localisation)

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
        <Flex gap={2}>
          <Text className="capitalize">{translate('connect')}</Text>
          <LoginIcon className="w-5 h-5" />
        </Flex>
      )}
    </NavButton>
  )
}

export const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const translate = useTranslation(localisation)

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
        >
          {/* Bubki Flag Button */}
          <Box fontWeight="bold" fontSize={[20, 20, 20]}>
            <NextLink href="/" passHref>
              <Link className="center flex gap-2">
                <span>🇺🇦</span>
                <span className="text-xl">Bubki</span>
              </Link>
            </NextLink>
          </Box>

          {/* Desktop Links */}
          <HStack>
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

            {/* Language Menu */}
            <Box display={{ base: 'none', lg: 'block' }}>
              <LanguageMenu />
            </Box>

            {/* Connect Wallet Button */}
            <ConnectWallet />

            {/* Drawer Toggle Button */}
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

      {/* Mobile Navbar */}
      <Drawer
        placement={'top'}
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="#005BBB" px={2}>
            {/* Top Wrapper */}
            <Box
              fontWeight="bold"
              display="flex"
              justifyContent="space-between"
              width="100%"
              paddingX="0.5rem"
              paddingTop="0.5rem"
              marginBottom="3rem"
              fontSize={[20, 20, 20]}
            >
              {/* Bubki Flag Button */}
              <NextLink href="/" passHref>
                <Link className="center flex gap-2">
                  <span>🇺🇦</span>
                  <span className="text-xl">Bubki</span>
                </Link>
              </NextLink>

              {/* Wallet and Close Button Wrapper */}
              <Flex gap="0.5rem">
                {/* Connect Wallet Button */}
                <ConnectWallet />

                {/* Close Icon */}
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
              </Flex>
            </Box>

            {/* Mapping through Links */}
            {navItems.map((navItem, index) => (
              <NavDrawerItem onClick={onToggle} key={index} href={navItem.href}>
                <Flex alignItems="center" gap={2}>
                  <Text padding="0" fontSize={'2rem'}>
                    {navItem.text}
                  </Text>
                </Flex>
              </NavDrawerItem>
            ))}

            {/* Twitter and Language Menu Wrapper */}
            <Flex
              width="100%"
              justify="space-between"
              bottom="2rem"
              alignItems="center"
              left="0"
              paddingX="1.5rem"
              position="absolute"
            >
              {/* Twitter Link - URL SHOULD BE UPDATED */}
              <SocialIcon bgColor="white" url="https://twitter.com/" />
              {/* Language Menu */}
              <LanguageMenu />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
