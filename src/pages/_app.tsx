import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import { WalletProvider } from '../context/wallet-provider'
import { Root } from '../components/Root'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <WalletProvider>
        <ChakraProvider>
          <Root>
            <Component {...pageProps} />
          </Root>
        </ChakraProvider>
      </WalletProvider>
    </DAppProvider>
  )
}

export default MyApp
