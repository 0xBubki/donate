import React from 'react'
import { Box } from '@chakra-ui/layout';
import Header from '../components/Header';

const Root = ({ children }) => {
  return (
    <Box backgroundColor="#005BBB" minHeight="100vh">
      <Header/>
      {children}
    </Box>
  )
}

export default Root