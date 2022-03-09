import { Flex, Text } from '@chakra-ui/layout'
import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { DepositDetails } from '../components/Stake/DepositDetails'
import { RedeemSwitch } from '../components/Stake/RedeemSwitch'
import { StakeMode, StakeView } from '../components/Stake'

import { useTranslation } from '../utils/use-translation'
const translations = require('../../public/locales/stake.json')

export default function Deposit() {
  const translate = useTranslation(translations)
  const [stakingMode, setStakingMode] = useState<StakeMode>(StakeMode.STAKE)

  function tabChanged() {
    if (stakingMode === StakeMode.UNSTAKE) {
      setStakingMode(StakeMode.STAKE)
    } else {
      setStakingMode(StakeMode.UNSTAKE)
    }
  }

  return (
    <Flex direction="column" className="space-y-16" width="100%" align="center">
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
            <Text
              mb="20px"
              fontWeight="bold"
              color="white"
              fontSize={['2rem', '3rem']}
            >
              {stakingMode === StakeMode.STAKE
                ? translate('stake')
                : translate('unstake')}
            </Text>
          </Box>

          <StakeView stakingMode={stakingMode} />
        </Flex>
      </Flex>

      <Heading textAlign="center">
        {stakingMode === StakeMode.STAKE
          ? translate('cta')
          : translate('withdrawCta')}
      </Heading>
      <DepositDetails />
    </Flex>
  )
}
