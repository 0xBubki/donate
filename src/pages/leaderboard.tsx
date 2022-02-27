import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../components/Root'
import { useTranslation } from '../utils/use-translation'
import { Divider } from '@chakra-ui/react'
import { Heading, Flex, Text, Box } from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from '@chakra-ui/react'

const localisation = {
  en: {
    title: 'Leaderboard for donations'
  },
  fr: {
    title: 'Classement pour les dons'
  }
}

const testingLeaderboardData = [
  {
    ens: 'ukraine.eth',
    address: '0x12345',
    value: 3.21
  },
  {
    ens: 'vitalik.eth',
    address: '0x67890',
    value: 2.29
  },
  {
    ens: 'mikedemaris.eth',
    address: '0xabcdef',
    value: 2.21
  }
]

const Leaderboard: NextPage = () => {
  const translate = useTranslation(localisation)

  return (
    <Root>
      <Head>
        <title>Leaderboard | Help Ukraine</title>
        <meta
          name="description"
          content="Leaderboard of donations by people to help Ukraine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="row"
        width="100vw"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Box width="885px">
            <Heading color="#fff" fontWeight="bold" fontSize="48">
              Leaderboard
            </Heading>
            <Divider />
            <Table variant="striped" colorScheme="whiteAlpha">
              {/* <TableCaption>Leaderboard of donations by people to help Ukraine</TableCaption> */}
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th isNumeric></Th>
                </Tr>
              </Thead>
              <Tbody>
                {testingLeaderboardData?.map((data, i) => {
                  return (
                    <Tr key={i}>
                      <Td color="white">
                        <Stat>
                          <StatNumber>#{i + 1}</StatNumber>
                          <StatHelpText>{` `}</StatHelpText>
                        </Stat>
                      </Td>
                      <Td color="white">
                        <Stat>
                          {/* <StatLabel>Collected Fees</StatLabel> */}
                          <StatNumber>{data.address}</StatNumber>
                          <StatHelpText>{data?.ens}</StatHelpText>
                        </Stat>
                      </Td>
                      <Td isNumeric color="white">
                        <Stat>
                          <StatNumber>Ξ {data.value}</StatNumber>
                          <StatHelpText>Donated</StatHelpText>
                        </Stat>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Root>
  )
}

export default Leaderboard
