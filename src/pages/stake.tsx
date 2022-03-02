import { Flex, Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { DepositDetails, RedeemSwitch } from '../components/Stake'
import { StakeMode, StakeView } from '../components/Stake/StakeView'

export default function Deposit() {
  const [stakingMode, setStakingMode] = useState<StakeMode>(StakeMode.STAKE)

  function tabChanged() {
    if (stakingMode === StakeMode.UNSTAKE) {
      setStakingMode(StakeMode.STAKE)
    } else {
      setStakingMode(StakeMode.UNSTAKE)
    }
  }

  return (
    <Flex direction="column" gap={16}>
      <Flex direction="column" align="center" justify="center">
        <RedeemSwitch onChange={tabChanged} />
        <Flex
          direction="column"
          align="center"
          justify="space-around"
          borderRadius="25px"
          background="rgba(0, 0, 0, 0.2)"
          padding={6}
        >
          <Box width="100%">
            <Text mb="20px" fontWeight="bold" color="white" fontSize="3rem">
              {stakingMode === StakeMode.STAKE ? 'Stake' : 'Unstake'}{' '}
            </Text>
          </Box>

          <StakeView stakingMode={stakingMode} />
        </Flex>
      </Flex>

      <DepositDetails stakingMode={stakingMode} />
    </Flex>
  )
}
