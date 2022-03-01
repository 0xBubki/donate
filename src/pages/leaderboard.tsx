import type { NextPage } from 'next'
import { useTranslation } from '../utils/use-translation'
import { Heading, Flex, Box } from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Stat,
  StatNumber,
  StatHelpText,
  Divider,
  useToast,
  Tag
} from '@chakra-ui/react'
import { FC, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import { shorten } from '../utils/shorten'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DuplicateIcon } from '@heroicons/react/outline'

const germanTrans = require('../../public/locales/de/leaderboard.json')
const englishTrans = require('../../public/locales/en/leaderboard.json')
const spanishTrans = require('../../public/locales/es/leaderboard.json')
const frenchTrans = require('../../public/locales/fr/leaderboard.json')

const localisation = {
  de: germanTrans,
  en: englishTrans,
  es: spanishTrans,
  fr: frenchTrans
}

const RECEIVER_WALLET = '0x10E1439455BD2624878b243819E31CfEE9eb721C'

const AddressField: FC<{ address: string }> = ({ address }) => {
  const toast = useToast()

  return (
    <CopyToClipboard text={address}>
      <Stat
        onClick={() => {
          toast.closeAll()
          toast({
            title: 'Copied!',
            description: `Address copied to clipboard.`,
            status: 'success',
            duration: 9000,
            isClosable: true
          })
        }}
      >
        <Flex alignItems="center" gap={1} cursor="pointer">
          <Tag
            fontSize={['xs', 'md', 'lg']}
            colorScheme="whiteAlpha"
            paddingY={1}
          >
            {shorten(address)}
          </Tag>
          <DuplicateIcon className="h-5 w-5" />
        </Flex>
      </Stat>
    </CopyToClipboard>
  )
}

const Leaderboard: NextPage = () => {
  const [leaders, setLeaders] = useState([])
  const [loading, setLoading] = useState(true)
  const translate = useTranslation(localisation)

  useEffect(() => {
    axios
      .post(
        'https://eth-mainnet.alchemyapi.io/v2/06iuz9tXgQRzmTQ1B28oqPnz5lQDQ-YO',
        {
          jsonrpc: '2.0',
          id: 0,
          method: 'alchemy_getAssetTransfers',
          params: [
            {
              fromBlock: '0x0',
              toBlock: 'latest',
              toAddress: RECEIVER_WALLET,
              excludeZeroValue: true,
              category: ['external']
            }
          ]
        }
      )
      .then((response) => {
        filterTransactionsLowToHigh(response?.data?.result?.transfers)
        setLoading(false)
      })
  }, [])

  const filterTransactionsLowToHigh = (arrayOfTransactions: {
    sort: (
      arg0: (a: { value: number }, b: { value: number }) => number
    ) => SetStateAction<never[]>
  }) => {
    setLeaders(
      arrayOfTransactions?.sort(
        (a: { value: number }, b: { value: number }) => b?.value - a?.value
        // @ts-ignore
      )
    )
  }

  return (
    <Flex
      direction="row"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="100%">
        <Box
          width="100%"
          marginX={2}
          padding={[4, 8]}
          backgroundColor="#0855A6"
          borderRadius="20px"
          mb="100px"
        >
          <Heading color="#fff" fontWeight="bold" fontSize="48" paddingY={4}>
            {translate('title')}
          </Heading>
          <Divider />
          {loading ? (
            <Box mt="20px" mb="20px" textAlign="center">
              <Spinner color="white" />
            </Box>
          ) : (
            <Table size="sm" variant="striped" colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th />
                  <Th />
                  <Th isNumeric />
                </Tr>
              </Thead>
              <Tbody>
                {leaders?.map((data: { from: string; value: number }, i) => (
                  <Tr key={i}>
                    <Td color="white">
                      <Tag
                        colorScheme="whiteAlpha"
                        textColor="white"
                        fontWeight="bold"
                        fontSize="xl"
                        paddingX={4}
                        paddingY={2}
                        borderRadius="10px"
                      >
                        {i + 1}
                      </Tag>
                    </Td>
                    <Td color="white" lineHeight={1.5}>
                      <AddressField address={data.from} />
                    </Td>
                    <Td isNumeric color="white" lineHeight={1.5}>
                      <Stat>
                        <StatNumber fontSize={['xs', 'sm', 'md']}>
                          Ξ{data?.value.toFixed(2)}
                        </StatNumber>
                        <StatHelpText fontSize={['xs', 'sm']}>
                          Donated
                        </StatHelpText>
                      </Stat>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Leaderboard
