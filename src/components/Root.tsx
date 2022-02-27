import React, {  ReactNode } from 'react'
import { Box } from '@chakra-ui/layout';
import Header from './Header';

const Root = ({ children } : { children: ReactNode }) => {
  return (
    <Box backgroundColor="#005BBB" minHeight="100vh" display="flex" flexDirection={"column"}>
      <Header/>
      <Box width="100%" height="100%" flexGrow={1} display="flex" alignContent="center" alignItems="center" justifyContent="center">
      {children}
      </Box>
    </Box>
  )
}

export default Root