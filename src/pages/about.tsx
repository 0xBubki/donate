import type { NextPage } from 'next'

import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About: NextPage = () => {
  return (
    <Flex
      direction="row"
      width="80%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        width="60%"
        height="100%"
        direction="column"
        justifyContent="space-between"
      >
        <Paragraph
          header="headerOne"
          paragraph1="paragraphOneA"
          paragraph2="paragraphOneB"
        />

        <Paragraph
          header="headerTwo"
          paragraph1="paragraphTwoA"
          paragraph2="paragraphTwoB"
        />

        <Paragraph header="headerThree" paragraph1="paragraphThree" />
      </Flex>
      <Box width="40%">
        <Image src="/wewantyouryield.png" className="your-yield" />
      </Box>
    </Flex>
  )
}

type LocaleType = 'de' | 'en' | 'es' | 'fr'
interface LocaleTypeProps {
  locale: LocaleType
}

export const getStaticProps = async ({ locale }: LocaleTypeProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about']))
  }
})

export default About

const Paragraph = ({
  header,
  paragraph1,
  paragraph2
}: {
  header: string
  paragraph1: string
  paragraph2?: string
}) => {
  const { t } = useTranslation('about')

  return (
    <Box
      height={
        paragraph2 ? (paragraph2 === 'paragraphOneB' ? '20%' : '40%') : '30%'
      }
    >
      <Heading color="#fff" fontWeight="bold" fontSize="6vh">
        {t(header)}
      </Heading>
      <Flex
        direction="column"
        height={
          paragraph2 ? (paragraph2 === 'paragraphOneB' ? '40%' : '60%') : 'auto'
        }
        justifyContent="space-around"
      >
        <Text color="#fff" fontWeight={400} fontSize="2vh">
          {t(paragraph1)}
        </Text>
        {paragraph2 ? (
          <Text color="#fff" fontWeight={400} fontSize="2vh">
            {t(paragraph2)}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
