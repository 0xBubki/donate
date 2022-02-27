import { Button } from '@chakra-ui/button'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { formatEther } from 'ethers/lib/utils'
import { useWallet } from '../context/wallet-provider'

export default function Deposit() {
  const { activateBrowserWallet, ens, account, etherBalance } = useWallet()
  return (
    <Box>
      <HStack
        borderWidth={1}
        shadow="sm"
        justifyContent="space-between"
        px={10}
        py={4}
      >
        <Box fontWeight="bold" fontSize={34}>
          uDai
        </Box>
        <Button onClick={activateBrowserWallet}>Connect to wallet</Button>
      </HStack>
      {account ? (
        <Box>
          <Text>Hello, {ens || account}!</Text>
          <Text>You have {formatEther(etherBalance)} ETH</Text>
        </Box>
      ) : null}
    </Box>
  )
}
