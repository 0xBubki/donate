import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  Text,
  InputRightElement,
  Button
} from '@chakra-ui/react'

export default function Redeem() {
  return (
    <Box p={[4, 10]}>
      <VStack spacing={10}>
        <Heading>Redeem uDai</Heading>
        <VStack>
          <Text>Exchange your uDAI back to DAI</Text>
          <Text>Withdrawn uDAI will immediately stop accruing interest</Text>
        </VStack>
        <Box display="flex">
          <FormControl>
            <FormLabel htmlFor="uDai">Redeem uDai</FormLabel>
            <InputGroup>
              <Input name="uDai" id="uDai" />
              <InputRightElement w="4.5rem">
                <Button h="1.75rem" size="sm">
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box mx={4} mt={8}>
            <TransferSVG />
          </Box>
          <FormControl>
            <FormLabel htmlFor="dai">Receive Dai</FormLabel>
            <Input name="dai" id="dai" />
          </FormControl>
        </Box>
        <Button variant="outline" colorScheme="blue">
          Redeem
        </Button>
      </VStack>
    </Box>
  )
}

const TransferSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      height={30}
    >
      <g>
        <path d="M923.1,718.6H235.4l148.3,151.5c26,26.6,26,69.9,0,96.5c-26.2,26.6-68.5,26.6-94.5,0l-252-257.4c-2.6-2.6-3.7-5.8-5.6-8.7C18.5,688.2,10,671.1,10,651.7c0-36.9,29.8-66.9,66.7-66.9h846.5c36.9,0,66.9,30,66.9,66.9C990,688.6,960,718.6,923.1,718.6L923.1,718.6L923.1,718.6z" />
        <path d="M923.1,406.8H76.7c-36.9,0-66.7-30-66.7-66.9C10,303,39.8,273,76.7,273h685.1L616.3,127.6c-26.2-26.2-26.2-68.5,0-94.5c26-26.2,68.3-26.2,94.5,0l252,252c1.2,1.2,1.6,2.8,2.8,4.2c14.5,12.3,24.4,30,24.4,50.6C990,376.8,960,406.8,923.1,406.8L923.1,406.8L923.1,406.8z" />
      </g>
    </svg>
  )
}
