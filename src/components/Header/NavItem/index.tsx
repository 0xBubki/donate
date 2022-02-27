import { Text, LinkProps, Link } from '@chakra-ui/react'
import { FC } from 'react'

export const NavItem: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link href={props.href} {...props} style={{ color: '#fff' }}>
      <Text
        color="#fff"
        fontSize={[16, 16, 18, 24]}
        mr={[8, 8, 4, 12]}
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
    <Link href={props.href} {...props} style={{ color: '#fff' }}>
      <Text
        color="#fff"
        fontSize={24}
        py={4}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  )
}
