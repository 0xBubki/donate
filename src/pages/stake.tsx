import { Flex, Text } from '@chakra-ui/layout'
import { useState } from 'react'
import {
  DepositBox,
  DepositDetails,
  RedeemSwitch,
  StakeBox,
  UnstakeBox
} from '../components/Stake'

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

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
        <DepositBox mode={stakingMode}>
          {stakingMode === DepositMode.DEPOSIT ? (
            <StakeBox />
          ) : (
            <>
              <UnstakeBox />
            </>
          )}
        </DepositBox>
      </Flex>

      <DepositDetails mode={stakingMode} />
    </Flex>
  )
}
