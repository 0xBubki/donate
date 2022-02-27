import { Flex, Spacer, Text, Box } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
const NFTS = () => {
    return(
        <Box display="flex" flexDirection="column" alignSelf="flex-start" width="80%">
            <Box display="flex" alignSelf="flex-start !important" flexGrow={1}  flexDirection="column" width="100%" height="100%">
                <Text 
                    color="white"
                    fontFamily='Montserrat'
                    fontSize="5vh"
                >
                    Explore NFTs
                </Text>
                <Spacer/>

                <NFTsNavBar/>
                <Divider size="xl" color="white" />
            </Box>

            <Box height="50%">
                <NFTDisplay/>
            </Box>
        </Box>
    )
}

export default NFTS

const NFTsNavBar = () => {
    return(
        <Flex direction="column" width="80%" color="white">

            <Flex width="60%" justifyContent="space-between">
                <Button title="Collection" number={321} />
                <Button title="Artists" number={122}/>
                <Button title="Recent" number={123}/>
            </Flex>
        </Flex>
    )
}

const Button = ({title, number}: {title: string, number: number}) => {
    return (
        <Flex direction="row" fontSize="3vh" flexBasis="25%">
            <Text pr="3">
                {title}
            </Text>
            <Text opacity={0.6}>
                {number}
            </Text>
        </Flex>
    )
}

const NFTDisplay = () => {
    return (
        <>
        <Box width="30%" color="white">
            <Text
                color="white"
                fontFamily='Montserrat'
                fontSize="3vh"
            >
                Collection Name
            </Text>
            <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta odio quos culpa modi ad excepturi minus ipsam. Optio rem quam corrupti consectetur, illum assumenda ea nesciunt ipsum. Obcaecati, modi.
            </Text>
        </Box>
        <Box>
            
        </Box>
        </>
    )
}