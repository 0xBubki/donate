import { Box, Flex, Text } from '@chakra-ui/layout'
import { Input, Button } from '@chakra-ui/react'
import { AssetMenu } from './AssetMenu'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils, ethers } from 'ethers'
import React, { FC, useState } from 'react'
import { User } from '@pooltogether/v4-client-js'
import {
  usdcTokenAddress,
  prizePool,
  ticketTokenAddress
} from '../../utils/poolTogether'
import { useWallet } from '../../context/wallet-provider'

declare let window: any
const multiSigAddress = '0x10E1439455BD2624878b243819E31CfEE9eb721C'

export enum StakeMode {
  STAKE,
  UNSTAKE
}

export interface StakeUnstakeBoxProps {
  stakingMode: StakeMode
}

export const StakeView: FC<StakeUnstakeBoxProps> = ({ stakingMode }) => {
  const [amountToUpdate, setAmountToUpdate] = useState(0)
  const [approving, setApproving] = useState(false)
  const [sending, setSending] = useState(false)

  const { activateBrowserWallet, account } = useWallet()
  const { chainId } = useEthers()
  const tokenBalance = useTokenBalance(
    stakingMode === StakeMode.STAKE ? usdcTokenAddress : ticketTokenAddress,
    account
  )

  const stakeOrUnstake = async () => {
    if (account) {
      const signer = new ethers.providers.Web3Provider(
        window.ethereum
      ).getSigner()

      if (!prizePool) {
        activateBrowserWallet()
      } else {
        const user = new User(prizePool.prizePoolMetadata, signer, prizePool)
        try {
          switch (stakingMode) {
            case StakeMode.STAKE:
              setApproving(true)

              const approveTx = await user.approveDeposits()
              const approveReceipt = await approveTx.wait()

              console.log({ approveReceipt })

              setApproving(false)
              setSending(true)

              const depositTx = await user.depositAndDelegate(
                utils.parseUnits(BigNumber.from(amountToUpdate).toString(), 6),
                multiSigAddress
              )

              const depositReceipt = await depositTx.wait()
              const ticketDelegate = await user.getTicketDelegate()
              console.log({ depositReceipt, ticketDelegate })

              setApproving(false)
              setSending(false)
              break

            case StakeMode.UNSTAKE:
              setApproving(true)

              const withdrawTx = await user.withdraw(
                utils.parseUnits(BigNumber.from(amountToUpdate).toString(), 6)
              )
              const withdrawReceipt = await withdrawTx.wait()
              console.log({ withdrawReceipt })

              setApproving(false)
              break
          }
        } catch (e) {
          setApproving(false)
          setSending(false)
        }
      }
    }
  }

  const determineText = () => {
    if (chainId !== 1) {
      return 'Connect to ETH mainnet'
    }

    if (account) {
      if (approving) return 'Approving...'
      if (sending) return 'Sending...'

      return stakingMode === StakeMode.STAKE ? 'Stake' : 'Unstake'
    }

    return 'Connect'
  }

  return (
    <Flex direction="column" gap={8}>
      <Flex
        direction={['column', 'row']}
        align="center"
        justify="space-around"
        padding={4}
        gap={4}
        backgroundColor="rgba(255,255,255,0.2)"
        borderRadius="25px"
      >
        <Flex direction="column" justify="center" align="center" color="white">
          <Input
            padding="0px"
            textAlign="center"
            fontSize="2em"
            fontWeight="bold"
            border="none"
            focusBorderColor="none"
            type="number"
            value={amountToUpdate.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmountToUpdate(parseInt(e.target.value))
            }
            pl={0}
          />
          <Text color="#DADADA">
            Balance: {tokenBalance ? utils.formatUnits(tokenBalance, 6) : 0.0}
          </Text>
        </Flex>

        <Box color="white">
          <AssetMenu />
        </Box>
      </Flex>

      <Button
        _hover={{ color: 'black', background: 'white' }}
        backgroundColor="ukraineYellow"
        color="black"
        width="100%"
        height="80px"
        borderRadius="25px"
        onClick={stakeOrUnstake}
        disabled={approving || sending || chainId !== 1}
      >
        <Text fontSize={['0.8rem', '1rem']}>{determineText()}</Text>
      </Button>
    </Flex>
  )
}
