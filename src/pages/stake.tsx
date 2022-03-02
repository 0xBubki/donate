import { Flex, Text } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import DepositDetails from '../components/DepositDetails'
import DepositBox from '../components/DepositBox'
import BoxDepositBox from '../components/BoxDepositBox'
import BoxUnstakeBox from '../components/BoxUnstakeBox'
import RedeemSwitch from '../components/RedeemSwitch'
import Link from 'next/link'
import { headerSizingLg, headerSizingSm, headerSizingXs } from '../utils/sizing'

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
    <Flex direction={['column', 'column', 'column', 'row']} gap={16}>
      <Flex direction="column" align="center" justify="center" width="100%">
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

      {/* <Flex flexDirection="column" align="center" justify="center" /> */}
      {/* <Flex flexDirection="column" align="end">
        <Text color="white" fontSize={headerSizingXs}>
          Looking an NFT instead?
        </Text>

        <Text color="white" fontSize={headerSizingXs}>
          <Link href="/mint">Click here</Link>
        </Text>
      </Flex> */}
    </Flex>
  )
}
