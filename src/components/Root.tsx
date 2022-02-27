import { FC } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Header from './Header'

const Root: FC = ({ children }) => {
  return (
    <Box backgroundColor="#005BBB" minHeight="100vh" display="flex" flexDirection={"column"}>
      <Header/>
        <Box width="100%" height="100%" flexGrow={1} flexDirection="column" display="flex" justifyContent="space-evenly">
          {children}
        </Box>
      <Footer/>
    </Box>
  )
}

export default Root

const Footer = () => {
  return(
    <Box width="100vw" display="flex" alignItems="center" justifyContent="center" mb="10px">
    </Box>
  )
}
