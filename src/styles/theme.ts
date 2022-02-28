// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    ukraineBlue: '005BBB',
    ukraineYellow: '#FFD500'
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'ukraineBlue',
        color: 'white'
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  }
})
