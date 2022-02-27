import { Button } from '@chakra-ui/button'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { formatEther } from 'ethers/lib/utils'
import { useWallet } from '../context/wallet-provider'
import { shorten } from '../utils/shorten'
import {
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  MenuList,
  MenuItem,
  Menu
} from '@chakra-ui/react'
import Davatar from '@davatar/react'
import { LoginIcon } from '@heroicons/react/outline'
import { Root } from '../components/Root'

export default function Deposit() {
  const { activateBrowserWallet, ens, account, etherBalance } = useWallet()
  return (
    <Root>
      {/* <Box> */}
      {/* <HStack
        borderWidth={1}
        shadow="sm"
        justifyContent="space-between"
        px={10}
        py={4}
      >
        <Box fontWeight="bold" fontSize={34}>
          uDai
        </Box>
        <Button onClick={activateBrowserWallet} padding={0} rounded="md">
          {account ? (
            <Flex alignItems="center">
              <Box>
                <Text paddingX={3}>
                  {parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </Text>
              </Box>
              <Flex
                alignItems="center"
                gap={2}
                bg="gray.200"
                paddingY={1}
                paddingX={2}
                marginRight={1}
                rounded="md"
              >
                <Box>
                  <Davatar size={25} address={account} />
                </Box>
                <Text>{ens || shorten(account)}</Text>
              </Flex>
            </Flex>
          ) : (
            <Flex alignItems="center" gap={2}>
              <Text paddingX={4}>Connect wallet</Text>
              <LoginIcon className="h-5 w-5" />
            </Flex>
          )}
        </Button>
      </HStack>
    </Box> */}
      <SimpleGrid columns={2} spacing={10}>
        <Flex
          width="50vw"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <RedeemSwitch />

          <DepositBox>
            <BoxDepositBox />
          </DepositBox>
        </Flex>
        <Flex
          width="50vw"
          flexDirection="column"
          align="center"
          justify="center"
        >
          Hello
        </Flex>
      </SimpleGrid>
    </Root>
  )
}

const RedeemSwitch = () => (
  <Tabs
    variant="soft-rounded"
    backgroundColor={'white'}
    borderRadius="25px"
    width="524px"
    marginBottom="20px"
  >
    <TabList>
      <Tab width="262px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        Stake{' '}
      </Tab>
      <Tab width="262px" _selected={{ color: 'white', bg: '#027DFF' }}>
        {' '}
        Unstake{' '}
      </Tab>
    </TabList>
  </Tabs>
)

type DepositBoxProps = {
  children: React.ReactNode
}

const DepositBox = ({ children }: DepositBoxProps) => (
  <Box
    borderRadius="25px"
    background="rgba(0, 0, 0, 0.2)"
    width="524px"
    height="423px"
    padding="20px"
    display="flex"
    flexDirection="column"
    alignItems={'center'}
    alignContent="center"
  >
    <Box width="100%">
      <Text color="white" fontSize="48px" float="left">
        {' '}
        Stake{' '}
      </Text>
    </Box>

    {children}
  </Box>
)

const BoxDepositBox = () => (
  <Box
    backgroundColor="rgba(255,255,255,0.2)"
    width="455px"
    height="140px"
    borderRadius="20px"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
  >
    <Box color="white">
      <Text fontSize="36px">0.05</Text>
      <Text color="#DADADA"> balance: 0.02</Text>
    </Box>

    <Box color="white">
      <AssetMenu />
    </Box>
  </Box>
)

const AssetMenu = () => (
  <Menu>
    {({ isOpen }) => (
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    )}
  </Menu>
)
