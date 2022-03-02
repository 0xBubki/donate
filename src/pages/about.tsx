import type { NextPage } from 'next'

import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useTranslation } from '../utils/use-translation'

const localization = require('../../public/locales/about.json')

const About: NextPage = () => {
  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Flex
        width="66%"
        height="100%"
        direction="column"
        justifyContent="space-between"
        gap="3rem"
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
      <Box
        position="fixed"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
        width="30%"
      >
        <Image
          src="/wewantyouryield.png"
          className="your-yield"
          alt="We want your yield"
        />
      </Box>
    </Flex>
  )
}

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
  const translate = useTranslation(localization)

  return (
    <Box
      height={
        paragraph2 ? (paragraph2 === 'paragraphOneB' ? '20%' : '40%') : '30%'
      }
    >
      <Heading
        color="#fff"
        fontWeight="bold"
        fontSize={{ base: '1.5rem', sm: '2rem', md: '3rem', xl: '3.5rem' }}
        marginBottom="0.5vh"
      >
        {translate(header)}
      </Heading>
      <Flex
        direction="column"
        height={
          paragraph2 ? (paragraph2 === 'paragraphOneB' ? '40%' : '60%') : 'auto'
        }
        justifyContent="space-around"
      >
        <Text
          color="#fff"
          fontWeight={400}
          fontSize={{ base: '1rem', md: '1.2rem' }}
        >
          {translate(paragraph1)}
        </Text>
        {paragraph2 ? (
          <Text
            color="#fff"
            fontWeight={400}
            fontSize={{ base: '1rem', md: '1.2rem' }}
          >
            {translate(paragraph2)}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
