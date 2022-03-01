import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import DepositDetails from '../components/DepositDetails'
import DepositBox from '../components/DepositBox'
import BoxDepositBox from '../components/BoxDepositBox'
import RedeemSwitch from '../components/RedeemSwitch'

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
          <BoxDepositBox />
          {stakingMode === DepositMode.DEPOSIT ? (
            <></>
          ) : (
            <>
              <Button
                _hover={{ color: 'black', background: 'white' }}
                backgroundColor="#FFD500"
                color="black"
                width="455px"
                height="80px"
                borderRadius="25px"
              >
                <Text fontSize="3xl">Unstake</Text>
              </Button>

              <Button
                _hover={{ color: 'black', background: 'white' }}
                backgroundColor="#FFF"
                color="black"
                width="455px"
                height="80px"
                borderRadius="25px"
                mt={6}
              >
                <Text fontSize="3xl" color="#000">
                  Donate Principal
                </Text>
              </Button>
            </>
          )}
        </DepositBox>
      </Flex>
      <Flex flexDirection="column" align="center" justify="center">
        {/*<DepositDetails mode={stakingMode} />*/}
      </Flex>

      <Flex flexDirection="column" align="center" justify="center" />
      <Flex flexDirection="column" align="end">
        <Text color="white" fontSize="30px">
          Looking to donate instead?
        </Text>

        <Text color="white" fontSize="30px">
          <a href="#">link to donate</a>
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
