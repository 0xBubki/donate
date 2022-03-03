import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'
import Head from 'next/head'

export const Page: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{'Bubki | NFTs & Staking for Ukraine'}</title>
        <meta name="description" content="Donate your yield to help Ukraine" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bubki | NFTs & Staking for Ukraine"
        />
        <meta
          name="twitter:image"
          content="https://www.bubki.xyz/og_image.png"
        />
        <meta
          property="og:title"
          content="Bubki | NFTs & Staking for Ukraine"
        />
        <meta
          property="og:description"
          content="Using the power of Web3 to help Ukraine"
        />
        <meta
          property="og:image"
          content="https://www.bubki.xyz/og_image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" backgroundColor="#005BBB">
        <Header />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  )
}

const Footer = () => {
  return <Flex height="10%"></Flex>
}
