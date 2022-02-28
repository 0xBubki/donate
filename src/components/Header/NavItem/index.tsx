import { Text, LinkProps, Link } from '@chakra-ui/react'
import { FC } from 'react'

export const NavItem: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link href={props.href} {...props} style={{ color: '#fff' }}>
      <Text
        color="#fff"
        fontSize={[16, 16, 16, 18]}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  )
}

export const NavDrawerItem: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link
      href={props.href}
      {...props}
      style={{
        color: '#fff',
        textDecoration: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      <Text
        color="#fff"
        fontSize={20}
        py={4}
        px={4}
        _hover={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
        style={{ borderRadius: 25 }}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  )
}
