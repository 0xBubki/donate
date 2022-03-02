import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      className="flex flex-row gap-2"
      margin="0px !important"
      backgroundColor="#FFD500"
      color="black"
      borderRadius="25px"
      _hover={{
        bg: 'darkYellow'
      }}
      _active={{
        bg: 'darkYellow'
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
