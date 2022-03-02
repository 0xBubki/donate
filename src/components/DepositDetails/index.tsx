import { Box, Flex, Text } from '@chakra-ui/layout'
import { prizePool, ticketTokenAddress } from '../../utils/poolTogether'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils } from 'ethers'
import { headerSizingXs } from '../../utils/sizing'

interface Props {
  mode: DepositMode
}

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

const DetailsBox = (props: Props) => {
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(ticketTokenAddress, account)

  const tokenBalanceOrZero = tokenBalance || 0

  return (
    <Flex flexDirection="column" align="left" justify="center" width="100%">
      <Flex justify="space-between" gap={4} direction="column">
        <Flex
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
          width="100%"
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
          width="100%"
          minWidth="320px"
          padding="20px"
          display="flex"
          direction="column"
          alignItems="center"
        >
          <Text color="white" fontSize="50px">
            $6.55m
          </Text>
          <Text color="white" fontSize="20px">
            Total Staked
          </Text>
        </Flex>
      </Flex>
      {/* <Text fontSize={headerSizingXs} textAlign="center">
        {props.mode === DepositMode.DEPOSIT
          ? `[DEPOSIT COPY]`
          : `Withdraw the exact amount of assets that you deposited`}
      </Text> */}
    </Flex>
  )
}

export default DetailsBox
