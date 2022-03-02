import { Box, Flex, Text } from '@chakra-ui/layout'
import { Input, Button } from '@chakra-ui/react'
import AssetMenu from '../AssetMenu'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { BigNumber, utils, ethers } from 'ethers'
import React, { useState } from 'react'
import { User } from '@pooltogether/v4-client-js'
import { usdcTokenAddress, prizePool } from '../../../utils/poolTogether'
import { useWallet } from '../../../context/wallet-provider'

declare let window: any

const multiSigAddress = '0x10E1439455BD2624878b243819E31CfEE9eb721C'

const BoxDepositBox = () => {
  const [amountToDonate, setAmountToDonate] = useState(0)
  const [approve, setApprove] = useState(false)
  const [deposit, setDeposit] = useState(false)
  const { activateBrowserWallet, account } = useWallet()
  const { chainId } = useEthers()
  const tokenBalance = useTokenBalance(usdcTokenAddress, account)

  const handleStaking = async () => {
    if (account) {
      const signer = new ethers.providers.Web3Provider(
        window.ethereum
      ).getSigner()

      if (prizePool) {
        const user = new User(prizePool.prizePoolMetadata, signer, prizePool)
        try {
          setApprove(true)
          const approveTx = await user.approveDeposits()
          const approveReceipt = await approveTx.wait()
          setApprove(false)
          setDeposit(true)
          const depositTx = await user.depositAndDelegate(
            utils.parseUnits(BigNumber.from(amountToDonate).toString(), 6),
            multiSigAddress
          )
          await depositTx.wait()
          const ticketDelegate = await user.getTicketDelegate()
          console.log(`delagated to ${ticketDelegate}`)
          setApprove(false)
          setDeposit(false)
        } catch (e) {
          setApprove(false)
          setDeposit(false)
        }
      }
    } else {
      activateBrowserWallet()
    }
  }

  const determineText = () => {
    if (chainId !== 1) {
      return 'Connect to ETH mainnet'
    }
    if (account) {
      if (approve) return 'Approving...'
      if (deposit) return 'Depositing...'

      return 'Stake'
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
            value={amountToDonate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmountToDonate(parseInt(e.target.value))
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
        onClick={handleStaking}
        disabled={approve || deposit || chainId !== 1}
      >
        <Text fontSize={['0.8rem', '1rem']}>{determineText()}</Text>
      </Button>
    </Flex>
  )
}

export default BoxDepositBox
