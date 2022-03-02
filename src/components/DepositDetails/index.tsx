import { Flex, Text } from '@chakra-ui/layout'
import { prizePool, ticketTokenAddress } from '../../utils/poolTogether'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils } from 'ethers'
import { useEffect, useState } from 'react'
import { headerSizingXs } from '../../utils/sizing'

interface Props {
  mode: DepositMode
}

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

const multiSigAddress = '0x664A99B82230eFd61d36828C46e66271BDBac92C'

const DetailsBox = (props: Props) => {
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
    <Flex flexDirection="column" align="left" justify="center" width="100%">
      <Flex
        direction={['column', 'column', 'row', 'row']}
        justify="space-around"
        align="center"
        gap={4}
      >
        <Flex
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
          width="320px"
          padding="20px"
          flexDirection="column"
          alignItems="center"
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
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
          width="320px"
          padding="20px"
          display="flex"
          direction="column"
          alignItems="center"
        >
          <Text color="white" fontSize="50px">
            ${totalYieldEarned}
          </Text>
          <Text color="white" fontSize="20px">
            Total Yield Earned
          </Text>
        </Flex>
      </Flex>
      <Text fontSize={headerSizingXs} textAlign="center">
        {props.mode === DepositMode.DEPOSIT
          ? `Join the movement: deposit, yield, support!`
          : `Withdraw all deposited assets`}
      </Text>
    </Flex>
  )
}

export default DetailsBox
