import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import { WalletProvider } from '../context/wallet-provider'
import { Page } from '../components/Page'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <WalletProvider>
        <ChakraProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
      </WalletProvider>
    </DAppProvider>
  )
}

export default MyApp
