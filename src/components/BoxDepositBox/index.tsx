import { Box, Text } from '@chakra-ui/layout'
import AssetMenu from '../AssetMenu'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { usdcTokenAddress } from '../../utils/poolTogether'
import { utils } from 'ethers'

const BoxDepositBox = () => {
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
        <Text fontSize="36px" fontWeight="bold">
          5
        </Text>
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
