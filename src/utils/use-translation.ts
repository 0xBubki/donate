import { useRouter } from 'next/router'
import { useCallback } from 'react'

export type LanguageID = string
export type Untranslated = string
export type Translated = string

export interface TranslationDict {
  [untranslated: Untranslated]: Translated
}

export interface Translations {
  [lang: LanguageID]: TranslationDict
}

export function useTranslation(dictionary: Translations) {
  const { locale, defaultLocale, pathname } = useRouter()

  const translate = useCallback(
    (text: string) => {
      if (locale) {
        if (locale in dictionary) {
          // @ts-ignore
          if (text in dictionary[locale]) {
            // @ts-ignore
            return dictionary[locale][text]
          } else {
            console.log('text not found in locale dictionary ', {
              locale,
              text,
              dictionary
            })
          }
        } else {
          console.log('local not found in dictionary ', {
            locale,
            text,
            dictionary
          })
        }
      } else {
        console.log('locale not found for route ', { locale, pathname })
      }

      if (defaultLocale) {
        if (defaultLocale in dictionary) {
          // @ts-ignore
          if (text in dictionary[defaultLocale]) {
            // @ts-ignore
            return dictionary[defaultLocale][text]
          } else {
            console.log('text not found in defaultLocale dictionary ', {
              defaultLocale,
              dictionary
            })
          }
        } else {
          console.log('defaultLocale not found in dictionary ', {
            defaultLocale,
            dictionary
          })
        }
      } else {
        console.log('defaultLocale not found for route ', {
          defaultLocale,
          pathname
        })
      }
    },
    [defaultLocale, dictionary, locale, pathname]
  )

  return translate
}
