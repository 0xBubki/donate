import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import {Header} from '../Header'

export const Root: FC = ({ children }) => {
  return (
    <Flex
      position="absolute"
      direction="column"
      height="100%"
      width="100%"
      backgroundColor="#005BBB"
    >
      <Header />
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <main>
          {children}
        </main>
      </Flex>
    </Flex>
  )
}
