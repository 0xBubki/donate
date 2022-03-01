/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import Davatar from '@davatar/react'
import {
  ChevronDownIcon,
  FireIcon,
  GlobeAltIcon,
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

export const Header = () => {
  const { activateBrowserWallet, ens, account } = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { locale } = useRouter()
  const { t } = useTranslation('navigation')

  const navItems = [
    { text: t('stake'), href: '/stake', icon: <KeyIcon className="h-6 w-6" /> },
    {
      text: t('mint'),
      href: '/mint',
      icon: <PlusCircleIcon className="h-6 w-6" />
    },
    {
      text: t('donate'),
      href: '/donate',
      icon: <HeartIcon className="h-6 w-6" />
    },
    {
      text: t('leaderboard'),
      href: '/leaderboard',
      icon: <FireIcon className="h-6 w-6" />
    },
    {
      text: t('about'),
      href: '/about',
      icon: <InformationCircleIcon className="h-6 w-6" />
    }
  ]

  return (
    <header>
      <Stack direction={['column', 'column', 'row']} px={2} py={4}>
        <HStack justifyContent={['space-between']} w={'full'}>
          <Box ml={['none', '208px']} fontWeight="bold" fontSize={[20, 20, 20]}>
            <Link href="/">
              <Text className="capitalize">🇺🇦 {t('title')}</Text>
            </Link>
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
                <NavItem key={index} href={navItem.href} className="capitalize">
                  {navItem.text}
                </NavItem>
              ))}
            </HStack>

            <Menu>
              <MenuButton
                as={Button}
                colorScheme="yellow"
                rounded="full"
                py="7"
              >
                <Flex alignItems="center">
                  <GlobeAltIcon className="w-6 h-6 mr-2" />
                  <Text className="uppercase">{locale}</Text>
                  <ChevronDownIcon className="w-6 h-6 ml-2" />
                </Flex>
              </MenuButton>
              <MenuList bg="yellow.300" color="black" className="capitalize">
                <MenuItem>
                  <Link href="/" locale={locale === 'en' ? 'de' : 'en'}>
                    <Text>{t('english')}</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/" locale={locale === 'fr' ? 'en' : 'fr'}>
                    <Text>{t('french')}</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/" locale={locale === 'de' ? 'en' : 'de'}>
                    <Text>{t('german')}</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/" locale={locale === 'es' ? 'en' : 'es'}>
                    <Text>{t('spanish')}</Text>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

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
                  <Text className="capitalize">{t('connect')}</Text>
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
                <Flex alignItems="center" gap={3}>
                  {navItem.icon}
                  <Text>{navItem.text}</Text>
                </Flex>
              </NavDrawerItem>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
