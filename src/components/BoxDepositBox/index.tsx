import { Box, Text } from '@chakra-ui/layout'
import AssetMenu from '../AssetMenu'

const BoxDepositBox = () => (
  <Box
    backgroundColor="rgba(255,255,255,0.2)"
    width="100%"
    borderRadius="25px"
    display="flex"
    paddingX="25px"
    paddingY="20px"
    mb="28px"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box color="white">
      <Text fontSize="36px" fontWeight="bold">
        0.05
      </Text>
      <Text color="#DADADA">Balance: 0.02</Text>
    </Box>
    <Box color="white">
      <AssetMenu />
    </Box>
  </Box>
)

export default BoxDepositBox
