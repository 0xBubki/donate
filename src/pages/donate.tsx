import * as React from 'react'
import { Button, Flex, Text, Box, Input, Select } from '@chakra-ui/react'
import { NextPage } from 'next'

const Donate: NextPage = () => {
  return (
    <Box
      color="white"
      width="100vw"
      height="80vh"
      display="flex"
      alignSelf="center"
      flexDirection="column"
    >
      <Flex
        direction="column"
        width="50%"
        height="100%"
        alignSelf="center"
        alignItems="center"
      >
        <Box
          height="30%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text
            fontSize="4vh"
            fontFamily="Nunito"
            fontWeight="500"
            lineHeight="0"
          >
            You have donated
          </Text>
          <Text
            fontSize="12vh"
            fontFamily="Nunito"
            fontWeight="700"
            lineHeight="10vh"
          >
            $34,567.00
          </Text>
          <Text
            fontSize="4vh"
            opacity={0.6}
            fontFamily="Nunito"
            fontWeight="700"
            lineHeight="0"
          >
            <Text display="inline" fontFamily="Comfortaa" fontSize="4vh">
              Ξ
            </Text>
            10.56
          </Text>
        </Box>

        <Box
          height="65%"
          width="95%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text
            fontSize="5vh"
            height="10%"
            fontFamily="Nunito"
            fontWeight="500"
          >
            Donate More
          </Text>

          <Flex
            width="90%"
            height="20%"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <AmountSelectionButton number="50" />
            <AmountSelectionButton number="100" />
            <AmountSelectionButton number="250" />
          </Flex>

          <Flex height="23%" width="80%" direction="column">
            <UserInput />
          </Flex>

          <Button
            width="80%"
            height="15%"
            borderRadius="15px"
            backgroundColor="#FFD500"
            color="black"
          >
            <Text fontSize="3.5vh" fontFamily="Nunito" fontWeight="700">
              Donate
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Donate

const AmountSelectionButton = ({ number }: { number: string }) => {
  return (
    <Button
      size="xl"
      width="25%"
      height="100"
      backgroundColor="#FFD500"
      color="black"
      borderRadius="17px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Flex
        direction="column"
        height="90%"
        justifyContent="space-evenly"
        mt="5px"
      >
        <Text
          fontSize="6vh"
          fontFamily="Fredoka"
          fontWeight="700"
          lineHeight="2vh"
        >
          ${number}
        </Text>
        <ETHAmount fontSize="2vh" />
      </Flex>
    </Button>
  )
}

const ETHAmount = ({ fontSize }: { fontSize: string }) => {
  return (
    <Text
      fontSize={fontSize}
      opacity={0.6}
      fontFamily="Nunito"
      fontWeight="700"
      lineHeight="0"
    >
      <Text display="inline" fontFamily="Comfortaa" fontSize={fontSize}>
        Ξ
      </Text>
      10.56
    </Text>
  )
}

const UserInput = () => {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="rgba(249, 249, 249, 0.2)"
      borderRadius="15px"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Input
        opacity="1 !important"
        width="60%"
        height="50%"
        color="white"
        backgroundClip="inherit"
        fontSize="4vh"
        border="none"
      />
      <Select
        width="20%"
        className="donate"
        backgroundColor="rgba(249, 249, 249, 0.2)"
        border="none"
      ></Select>
    </Box>
  )
}
