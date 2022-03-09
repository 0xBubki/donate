import { Flex, Heading, Text } from '@chakra-ui/layout'
import { prizePool, ticketTokenAddress } from '../../../utils/poolTogether'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils } from 'ethers'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from '../../../utils/use-translation'

const translations = require('../../../../public/locales/stake.json')
const multiSigAddress = '0x10E1439455BD2624878b243819E31CfEE9eb721C'

const TotalStakedBox: FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      className="w-full max-w-xs p-8 center"
      borderRadius="25px"
      background="rgba(0, 0, 0, 0.2)"
    >
      {children}
    </Flex>
  )
}

export const DepositDetails = () => {
  const translate = useTranslation(translations)
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(ticketTokenAddress, account)
  const tokenBalanceOrZero = tokenBalance || 0
  const [totalYieldEarned, setTotalYieldEarned] = useState(0)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

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
    <Flex className="w-full max-w-3xl flex-col items-around justify-center space-y-16">
      <Flex
        direction={['column', 'column', 'row', 'row']}
        className="justify-around items-center space-y-4"
      >
        <TotalStakedBox>
          <Heading color="white" className="text-4xl">
            {formatter.format(
              // @ts-ignore
              utils
                .formatUnits(BigNumber.from(tokenBalanceOrZero), 6)
                ?.toString() || 0
            )}
          </Heading>
          <Text color="white" className="text-2xl">
            {translate('stakedValueLabel')}
          </Text>
        </TotalStakedBox>

        <TotalStakedBox>
          <Heading color="white" className="text-4xl">
            {formatter.format(totalYieldEarned)}
          </Heading>
          <Text color="white" className="text-2xl">
            {translate('totalStakedLabel')}
          </Text>
        </TotalStakedBox>
      </Flex>
    </Flex>
  )
}
