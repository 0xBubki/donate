import { Flex, Text } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import DepositDetails from '../components/DepositDetails'
import DepositBox from '../components/DepositBox'
import BoxDepositBox from '../components/BoxDepositBox'
import BoxUnstakeBox from '../components/BoxUnstakeBox'
import RedeemSwitch from '../components/RedeemSwitch'
import Link from 'next/link'

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
    <SimpleGrid
      columns={{
        base: 2,
        lg: 2,
        md: 1,
        sm: 1
      }}
      spacing={10}
    >
      <Flex flexDirection="column" align="center" justify="center" width="50vw">
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
      <Flex flexDirection="column" align="center" justify="center">
        <DepositDetails mode={stakingMode} />
      </Flex>

      <Flex flexDirection="column" align="center" justify="center" />
      <Flex flexDirection="column" align="end">
        <Text color="white" fontSize="30px">
          Looking an NFT instead?
        </Text>

        <Text color="white" fontSize="30px">
          <Link href="/mint">Click here</Link>
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
