import { Box, Flex, Text } from '@chakra-ui/layout'
import { useWallet } from '../../context/wallet-provider'
import { useEffect, useState } from 'react'
import { PrizePoolNetwork } from '@pooltogether/v4-client-js'
import { mainnet, testnet } from '@pooltogether/v4-pool-data'

const YourDeposits = () => {
  const { account } = useWallet()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (account) {
      const getBalance = async () => {
        const PrizePoolNetwork = new PrizePoolNetwork(providers, testnet)
        const balances = await PrizePoolNetwork.prizePools.map(
          async (prizePool) => {
            // Get ethers contract, no nice util for getBalanceAt atm
            const ticketContract = await prizePool.getTicketContract()
            return ticketContract.getBalanceAt(user, currentEpochTimeInSeconds)
          }
        )
        console.log(balances)
      }

      getBalance()
    }
  }, [account])

  return (
    <Box width="524px">
      <Text mt={5} mb={4} fontSize="36px" fontWeight="bold" color="white">
        Your Deposits
      </Text>
      <Flex flexDirection={'row'} wrap="wrap" gap={4}>
        <Flex
          backgroundColor="#004B9B"
          paddingX="25px"
          paddingY="15px"
          borderRadius="25px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text fontWeight="bold" fontSize="36px" color="white">
            {(Math.random() * 100).toFixed(2)}
          </Text>
          <Text fontSize="16px" color="white">
            USDC
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default YourDeposits
