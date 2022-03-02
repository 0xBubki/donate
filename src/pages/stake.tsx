import { Flex, Text } from '@chakra-ui/layout'
import { useState } from 'react'

import DepositDetails from '../components/Stake/DepositDetails'
import DepositBox from '../components/Stake/DepositBox'
import BoxDepositBox from '../components/Stake/BoxDepositBox'
import BoxUnstakeBox from '../components/Stake/BoxUnstakeBox'
import RedeemSwitch from '../components/Stake/RedeemSwitch'

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
            <BoxDepositBox />
          ) : (
            <>
              <BoxUnstakeBox />
            </>
          )}
        </DepositBox>
      </Flex>

      <DepositDetails mode={stakingMode} />
    </Flex>
  )
}
