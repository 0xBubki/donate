// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    ukraineBlue: '005BBB',
    ukraineYellow: '#FFD500',
    darkYellow: '#dbb700'
  },
  styles: {
    global: {
      body: {
        bg: 'ukraineBlue',
        color: 'white'
      }
    }
  }
})
