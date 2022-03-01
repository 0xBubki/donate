import { Box, Text } from '@chakra-ui/layout'

type DepositBoxProps = {
  children: React.ReactNode
  mode: DepositMode
}

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

const DepositBox = ({ children, mode }: DepositBoxProps) => (
  <Box
    borderRadius="25px"
    background="rgba(0, 0, 0, 0.2)"
    paddingX="35px"
    paddingY="35px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    alignContent="center"
    justifyContent="space-around"
  >
    <Box width="100%">
      <Text
        mb="20px"
        fontWeight="bold"
        color="white"
        fontSize="48px"
        float="left"
      >
        {mode === DepositMode.DEPOSIT ? 'Stake' : 'Unstake'}{' '}
      </Text>
    </Box>

    {children}
  </Box>
)

export default DepositBox
