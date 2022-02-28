import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children }) => {
  return (
    <Button
      className="nav-button"
      backgroundColor="#FFD500"
      color="black"
      borderRadius="25px"
      _hover={{
        bg: 'darkYellow'
      }}
      _active={{
        bg: 'darkYellow'
      }}
    >
      {children}
    </Button>
  )
}
