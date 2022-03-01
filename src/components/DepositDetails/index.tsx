import { Box, Flex, Text } from '@chakra-ui/layout'

interface Props {
  mode: DepositMode
}

enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

const DetailsBox = (props: Props) => (
  <Flex flexDirection="column" align="left" justify="center" width="100%">
    <Flex
      justify="space-between"
      gap="18px"
      marginBottom="60px"
      flexDirection={{
        base: 'column',
        lg: 'row'
      }}
    >
      <Box
        borderRadius="25px"
        background="rgba(0, 0, 0, 0.2)"
        width="100%"
        padding="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        alignContent="center"
      >
        <Text color="white" fontSize="50px">
          $6.55m
        </Text>
        <Text color="white" fontSize="20px">
          Total Value You've Donated so Far
        </Text>
      </Box>
      <Box
        borderRadius="25px"
        background="rgba(0, 0, 0, 0.2)"
        width="100%"
        padding="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        alignContent="center"
      >
        <Text color="white" fontSize="50px">
          $6.55m
        </Text>
        <Text color="white" fontSize="20px">
          Total Contributions
        </Text>
      </Box>
    </Flex>
    <Text color="white" fontSize="30px">
      {props.mode === DepositMode.DEPOSIT
        ? `Get your yield on. Degen for a good cause.\n
        [insert copy in terms of yield to donate passive feeder collecting yields
          as they are being harvested to funnel into ukraine]\n
          Join the movement: deposit, yield, support!
          `
        : `Withdraw the exact amount of assets that you deposited`}
    </Text>
  </Flex>
)

export default DetailsBox
