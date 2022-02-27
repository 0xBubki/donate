import { Flex, Text, Button, Stack } from '@chakra-ui/react'
import Davatar from '@davatar/react'
import { formatEther } from '@ethersproject/units'
import { useWallet } from '../context/wallet-provider'

export default function Home() {
  const ConnectWalletButton = () => {
    const { account, activateBrowserWallet, ens, etherBalance } = useWallet()

    return (
      <Stack spacing={3} align="center">
        {account ? (
          <>
            <Davatar
              size={60}
              address={account}
              generatedAvatarType="jazzicon"
            />
            <Text color="white">Hello, {ens || account}!</Text>
            <Text color="white">You have {formatEther(etherBalance)} ETH</Text>
          </>
        ) : (
          <Button size="lg" onClick={() => activateBrowserWallet()}>
            Connect Wallet
          </Button>
        )}
      </Stack>
    )
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      minHeight="100vh"
      bg="blue.900"
      pt={20}
    >
      <ConnectWalletButton />
    </Flex>
  )
}
