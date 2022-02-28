import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'
import Head from 'next/head'

export const Root: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Donate | Help Ukraine</title>
        <meta name="description" content="Donate your yield to help Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        position="absolute"
        direction="column"
        justifyContent="space-between"
        minHeight="100vh"
        width="100%"
        backgroundColor="#005BBB"
      >
        <Header />
        <Flex width="100%" height="80%">
          <main>{children}</main>
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}

const Footer = () => {
  return <Flex height="10%"></Flex>
}
