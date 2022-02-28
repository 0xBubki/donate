import { Button } from '@chakra-ui/button'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { useTranslation } from '../utils/use-translation'
import Image from 'next/image'

const localisation = {
  en: {
    title: 'Donate your yield to help'
  },
  fr: {
    title: 'Donnez votre rendement'
  }
}

const Home: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="75vh"
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize={['1.4em', '1.7em', '2.1em']}>
          {translate('title')}{' '}
          <Text display="inline" color="ukraineYellow">
            Ukraine
          </Text>
        </Heading>

        <Flex mt="1vh" fontWeight="bold" alignItems="center" gap={5}>
          <Text fontSize={['2em', '2.8em', '4.2em']}>₴1,234,567.00</Text>
          <Text
            mt={['9px', '9px', '25px']}
            fontSize={['1.3em', '1.8em', '2em']}
          >
            {' '}
            donated
          </Text>
        </Flex>
        <Text
          color="rgba(255, 255, 255, 0.88)"
          fontWeight="bold"
          fontSize={['1.3em', '1.7em', '1.8em']}
        >
          Ξ123,456.00
        </Text>

        <Button
          mt="5vh"
          color="black"
          w="180px"
          borderRadius="25px"
          bg="ukraineYellow"
          _hover={{
            bg: 'darkYellow'
          }}
          _active={{
            bg: 'darkYellow'
          }}
        >
          Stake
        </Button>
        <Button mt="2vh" color="black" bg="white" w="180px" borderRadius="25px">
          Donate
        </Button>
      </Flex>
      <Flex
        display={['none', 'none', 'none', 'none', 'block']}
        position="fixed"
        bottom="0"
        right="55%"
        h="85%"
        w="700px"
        mr="50px"
      >
        <Image
          priority
          src="/statue.png"
          alt="Statue"
          layout="fill"
          objectFit="contain"
        ></Image>
      </Flex>
    </Flex>
  )
}

export default Home
