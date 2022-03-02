import {
  Menu,
  MenuButton,
  Button,
  Flex,
  MenuList,
  Text,
  MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '../../../utils/use-translation'

const germanTrans = require('../../../../public/locales/de/navigation.json')
const englishTrans = require('../../../../public/locales/en/navigation.json')
const spanishTrans = require('../../../../public/locales/es/navigation.json')
const frenchTrans = require('../../../../public/locales/fr/navigation.json')

const localisation = {
  de: germanTrans,
  en: englishTrans,
  es: spanishTrans,
  fr: frenchTrans
}
const LanguageMenu = () => {
  const { locale } = useRouter()
  const translate = useTranslation(localisation)

  return (
    /* Language Menu */
    <Menu>
      <MenuButton
        as={Button}
        bg="ukraineYellow"
        color="black"
        _hover={{
          bg: 'darkYellow'
        }}
        _active={{
          bg: 'darkYellow'
        }}
        rounded="full"
        py="3"
      >
        <Flex alignItems="center">
          <Text className="uppercase">{locale}</Text>
          <ChevronDownIcon className="w-6 h-6 ml-2" />
        </Flex>
      </MenuButton>
      <MenuList bg="ukraineYellow" color="black">
        <MenuItem>
          <NextLink href="" passHref locale={locale === 'en' ? 'de' : 'en'}>
            <Text className="capitalize">{translate('english')}</Text>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="" passHref locale={locale === 'fr' ? 'en' : 'fr'}>
            <Text className="capitalize">{translate('french')}</Text>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="" passHref locale={locale === 'de' ? 'en' : 'de'}>
            <Text className="capitalize">{translate('german')}</Text>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="" passHref locale={locale === 'es' ? 'en' : 'es'}>
            <Text className="capitalize">{translate('spanish')}</Text>
          </NextLink>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LanguageMenu
