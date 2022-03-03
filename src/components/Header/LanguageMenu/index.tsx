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
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '../../../utils/use-translation'

const localization = require('../../../../public/locales/navigation.json')

const LocaleLink: FC<{ locale: string }> = ({ locale, children }) => {
  return (
    <NextLink href="#" passHref locale={locale}>
      {children}
    </NextLink>
  )
}

const LanguageMenu = () => {
  const { locale = 'en' } = useRouter()
  const translate = useTranslation(localization)

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
        <LocaleLink locale="en">
          <MenuItem>
            <Text className="capitalize">{translate('english')}</Text>
          </MenuItem>
        </LocaleLink>
        <LocaleLink locale="fr">
          <MenuItem>
            <Text className="capitalize">{translate('french')}</Text>
          </MenuItem>
        </LocaleLink>
        <LocaleLink locale="de">
          <MenuItem>
            <Text className="capitalize">{translate('german')}</Text>
          </MenuItem>
        </LocaleLink>
        <LocaleLink locale="es">
          <MenuItem>
            <Text className="capitalize">{translate('spanish')}</Text>
          </MenuItem>
        </LocaleLink>
        <LocaleLink locale="uk">
          <MenuItem>
            <Text className="capitalize">{translate('ukrainian')}</Text>
          </MenuItem>
        </LocaleLink>
      </MenuList>
    </Menu>
  )
}

export default LanguageMenu
