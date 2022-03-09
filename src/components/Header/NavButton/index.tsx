import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      className="center flex-row space-x-2"
      userSelect="none"
      boxShadow="none"
      style={{ margin: '0px' }}
      fontSize={['0.8rem', '1rem']}
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
