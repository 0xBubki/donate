import { Box, Text } from '@chakra-ui/layout'
import { Input, Button } from '@chakra-ui/react'
import AssetMenu from '../AssetMenu'
import { useEthers, useTokenBalance } from '@usedapp/core'
import {
  prizePool,
  ticketTokenAddress,
  usdcTokenAddress
} from '../../utils/poolTogether'
import { BigNumber, utils, ethers } from 'ethers'
import React, { useState } from 'react'
import { User } from '@pooltogether/v4-client-js'
import { useWallet } from '../../context/wallet-provider'

declare let window: any

const BoxDepositBox = () => {
  const [amountToUnstake, setAmountToUnstake] = useState(0)
  const [withdrawing, setWithdrawing] = useState(false)
  const { activateBrowserWallet, account } = useWallet()
  const tokenBalance = useTokenBalance(ticketTokenAddress, account)

  const handleUnStaking = async () => {
    if (account) {
      const signer = new ethers.providers.Web3Provider(
        window.ethereum
      ).getSigner()

      if (prizePool) {
        const user = new User(prizePool.prizePoolMetadata, signer, prizePool)

        try {
          setWithdrawing(true)
          const withdrawTx = await user.withdraw(
            utils.parseUnits(BigNumber.from(amountToUnstake).toString(), 6)
          )
          const withdrawReceipt = await withdrawTx.wait()

          setWithdrawing(false)
        } catch (e) {
          setWithdrawing(false)
        }
      }
    } else {
      activateBrowserWallet()
    }
  }

  const determineText = () => {
    if (account) {
      if (withdrawing) return 'Withdrawing...'

      return 'Unstake'
    }
    return 'Connect'
  }

  return (
    <>
      <Box
        backgroundColor="rgba(255,255,255,0.2)"
        width="100%"
        borderRadius="25px"
        display="flex"
        paddingX="25px"
        paddingY="20px"
        mb="28px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box color="white">
          <Input
            fontSize="36px"
            fontWeight="bold"
            border="none"
            focusBorderColor="none"
            type="number"
            value={amountToUnstake}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmountToUnstake(parseInt(e.target.value))
            }
            pl={0}
          />
          <Text color="#DADADA">
            Balance: {tokenBalance ? utils.formatUnits(tokenBalance, 6) : 0.0}
          </Text>
        </Box>
        <Box color="white">
          <AssetMenu />
        </Box>
      </Box>
      <Button
        _hover={{ color: 'black', background: 'white' }}
        backgroundColor="ukraineYellow"
        color="black"
        width="455px"
        height="80px"
        borderRadius="25px"
        onClick={handleUnStaking}
        disabled={withdrawing}
      >
        <Text fontSize="3xl">{determineText()}</Text>
      </Button>
      {/*<Button*/}
      {/*  _hover={{ color: 'black', background: 'white' }}*/}
      {/*  backgroundColor="#FFF"*/}
      {/*  color="black"*/}
      {/*  width="455px"*/}
      {/*  height="80px"*/}
      {/*  borderRadius="25px"*/}
      {/*  mt={6}*/}
      {/*>*/}
      {/*  <Text fontSize="3xl" color="#000">*/}
      {/*    Donate Principal*/}
      {/*  </Text>*/}
      {/*</Button>*/}
    </>
  )
}

export default BoxDepositBox
