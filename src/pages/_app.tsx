import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import { WalletProvider } from '../context/wallet-provider'
import { Page } from '../components/Page'
import { theme } from '../styles/theme'

// const config = {
//   // Mainnet Ethereum
//   1: 'https://eth-mainnet.alchemyapi.io/v2/06iuz9tXgQRzmTQ1B28oqPnz5lQDQ-YO',
//   // Rinkeby
//   4: 'https://eth-rinkeby.alchemyapi.io/v2/URMQnJWJ0om6yAOnDGlFMZEQfPJo4VCZ'
//   // Polygon
//   // 137: new ethers.providers.JsonRpcProvider(137, 'https://polygon-rpc.com'),
//   // // Avalanche
//   // 43114: new ethers.providers.JsonRpcProvider(
//   //   43114,
//   //   'https://api.avax.network/ext/bc/C/rpc'
//   // )
// }

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return (
    <DAppProvider config={{}}>
      <WalletProvider>
        <ChakraProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
      </WalletProvider>
    </DAppProvider>
  )
}

export default MyApp
