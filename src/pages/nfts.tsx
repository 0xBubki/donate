import { Flex, Spacer, Text, Box, Button } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import Link from "next/link"

const NFTS = () => {
    return(
        <>
        <Box display="flex" alignSelf="center"  flexDirection="column" width="80%">
            <Text 
                color="white"
                fontFamily='Montserrat'
                fontSize="5vh"
            >
                Explore NFTs
            </Text>
            <Spacer/>

            <NFTsNavBar/>
            <Spacer/>
            <Divider size="xl" color="white" />
        </Box>

        <Box height="50vh" width="80%" alignSelf="center" >
            <NFTDisplay/>
        </Box>
        </>
    )
}

export default NFTS

const NFTsNavBar = () => {
    return(
        <Flex direction="column" width="80%" color="white">

            <Flex width="60%" justifyContent="space-between">
                <NavBarButton title="Collection" number={321} />
                <NavBarButton title="Artists" number={122}/>
                <NavBarButton title="Recent" number={123}/>
            </Flex>
        </Flex>
    )
}

const NavBarButton = ({title, number}: {title: string, number: number}) => {
    return (
        <Link href={title}>
            <Flex direction="row" fontSize="3vh" flexBasis="25%" _hover={{ cursor: "pointer" }}>
                <Text pr="3">
                    {title}
                </Text>
                <Text opacity={0.6}>
                    {number}
                </Text>
            </Flex>
        </Link>
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
            <Button colorScheme='yellow' size='md'>
                Check Collection
            </Button>
        </Box>
        <Box>
            
        </Box>
        </>
    )
}