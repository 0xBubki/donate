import { Text, LinkProps, Link } from '@chakra-ui/react'
import { FC } from 'react'

export const NavItem: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link href={props.href} {...props} style={{ color: '#fff' }}>
      <Text
        color="#fff"
        style={{ fontSize: 24, fontWeight: 600, marginRight: 48 }}
      >
        {children}
      </Text>
    </Link>
  )
}
