import { Flex, Heading, Text } from '@chakra-ui/layout'
import { prizePool, ticketTokenAddress } from '../../../utils/poolTogether'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils } from 'ethers'
import { useEffect, useState } from 'react'
import { StakeMode } from '..'

interface Props {
  stakingMode: StakeMode
}

const multiSigAddress = '0x10E1439455BD2624878b243819E31CfEE9eb721C'

export const DepositDetails = (props: Props) => {
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(ticketTokenAddress, account)
  const tokenBalanceOrZero = tokenBalance || 0
  const [totalYieldEarned, setTotalYieldEarned] = useState(0)

  useEffect(() => {
    const getPrizePool = async () => {
      if (prizePool) {
        const secondsSinceEpoch = Math.round(Date.now() / 1000)

        const ticketContract = await prizePool.getTicketContract()
        const amount = await ticketContract.getBalanceAt(
          multiSigAddress,
          secondsSinceEpoch
        )
        const convertedAmount =
          utils.formatUnits(BigNumber.from(amount), 6)?.toString() || 0
        // @ts-ignore
        setTotalYieldEarned(convertedAmount)
      }
    }

    getPrizePool()
  }, [])

  return (
    <Flex
      flexDirection="column"
      align="space-around"
      justify="center"
      gap={16}
      width="100%"
    >
      <Flex
        direction={['column', 'column', 'row', 'row']}
        justify="space-around"
        align="center"
        gap={4}
      >
        <Flex
          direction="column"
          align="center"
          padding={8}
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
        >
          <Text color="white" fontSize="50px">
            $
            {utils
              .formatUnits(BigNumber.from(tokenBalanceOrZero), 6)
              ?.toString() || 0}
          </Text>
          <Text color="white" fontSize="20px">
            Your Staked Value
          </Text>
        </Flex>

        <Flex
          direction="column"
          align="center"
          padding={8}
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
        >
          <Text color="white" fontSize="50px">
            ${totalYieldEarned}
          </Text>
          <Text color="white" fontSize="20px">
            Total Yield Earned
          </Text>
        </Flex>
      </Flex>

      <Heading textAlign="center">
        {props.stakingMode === StakeMode.STAKE
          ? `Deposit, yield, support`
          : `Withdraw all deposited assets`}
      </Heading>
    </Flex>
  )
}
