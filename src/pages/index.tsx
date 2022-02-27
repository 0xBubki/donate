import {Button} from '@chakra-ui/button'
import {Heading, Text, Flex} from '@chakra-ui/layout'
import type {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <Flex direction={"column"} alignItems="center" alignSelf="center">
            <Heading color='#fff' style={{fontWeight: 'bold', fontSize: 48}}>Donate your yield to help {' '}
                <span style={{color: '#FFD500'}}>Ukraine</span>
            </Heading>
            <Text color="#fff" style={{fontWeight: 'bold', fontSize: '96px'}}>₴1,234,567.00</Text>
            <Button backgroundColor="#FFD500"
                    style={{ borderRadius: 25, height: 58, width: 194, marginTop: 50 }}>
                Donate Now {'>'}
            </Button>
            <Link href="/nfts">
            <Button backgroundColor="#fff"
                    style={{ borderRadius: 25, height: 58, width: 251, marginTop: 20 }}>
                Explore NFTs
            </Button>
            </Link>
        </Flex>
    )
}

export default Home
