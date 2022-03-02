import { Flex } from '@chakra-ui/layout'
import { useState } from 'react'
import { DepositDetails, RedeemSwitch } from '../components/Stake'
import {
  DepositMode,
  StakeUnstakeBox
} from '../components/Stake/StakeUnstakeBox'

export default function Deposit() {
  const [stakingMode, setStakingMode] = useState<DepositMode>(
    DepositMode.DEPOSIT
  )

  function tabChanged() {
    if (stakingMode === DepositMode.WITHDRAW) {
      setStakingMode(DepositMode.DEPOSIT)
    } else {
      setStakingMode(DepositMode.WITHDRAW)
    }
  }

  return (
    <Flex direction="column" gap={16}>
      <Flex direction="column" align="center" justify="center">
        <RedeemSwitch onChange={tabChanged} />
        <StakeUnstakeBox stakingMode={stakingMode} />
      </Flex>
      <DepositDetails mode={stakingMode} />
    </Flex>
  )
}
