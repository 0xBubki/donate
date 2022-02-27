import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'

export const Root: FC = ({ children }) => {
  return (
    <Flex
      position="absolute"
      direction="column"
      width="100%"
      backgroundColor="#005BBB"
      minHeight="100vh"
    >
      <Header />
      <Flex width="100%" height="100%">
        <main>{children}</main>
      </Flex>
    </Flex>
  )
}
