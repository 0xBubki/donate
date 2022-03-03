import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'
import Head from 'next/head'

const DEFAULT_TITLE = 'Bubki | NFTs & Staking for Ukraine'
const DEFAULT_DESCRIPTION = 'Donate yield and mint NFTs to help Ukraine'
const OG_IMAGE = '/og_image.png'

export const Page: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:image" content={OG_IMAGE} />
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
