import { Box, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import AssetMenu from '../AssetMenu'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { usdcTokenAddress } from '../../utils/poolTogether'
import { utils } from 'ethers'
import React, { useState } from 'react'

const BoxDepositBox = () => {
  const [amountToDonate, setAmountToDonate] = useState(0)

  const { account } = useEthers()
  const tokenBalance = useTokenBalance(usdcTokenAddress, account)

  console.log({ tokenBalance })
  return (
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
          value={amountToDonate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmountToDonate(parseInt(e.target.value) || null)
          }
          pl={0}
        />
        <Text color="#DADADA">
          Balance: {tokenBalance ? utils.formatEther(tokenBalance) : 0.0}
        </Text>
      </Box>
      <Box color="white">
        <AssetMenu />
      </Box>
    </Box>
  )
}

export default BoxDepositBox
