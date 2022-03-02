import { Box, Flex, Text } from '@chakra-ui/layout'

type DepositBoxProps = {
  children: React.ReactNode
  mode: DepositMode
}

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

const DepositBox = ({ children, mode }: DepositBoxProps) => (
  <Flex
    direction="column"
    align="center"
    justify="space-around"
    borderRadius="25px"
    background="rgba(0, 0, 0, 0.2)"
    padding={8}
  >
    <Box width="100%">
      <Text mb="20px" fontWeight="bold" color="white" fontSize="48px">
        {mode === DepositMode.DEPOSIT ? 'Stake' : 'Unstake'}{' '}
      </Text>
    </Box>

    {children}
  </Flex>
)

export default DepositBox
