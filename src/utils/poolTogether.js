import {
  PrizePoolNetwork as PoolNetwork,
  User
} from '@pooltogether/v4-client-js'
import { testnet, mainnet } from '@pooltogether/v4-pool-data'
import { ethers } from 'ethers'

const providers = {
  // Mainnet Ethereum
  1: ethers.getDefaultProvider(1),
  // Rinkeby
  4: ethers.getDefaultProvider(
    'https://eth-rinkeby.alchemyapi.io/v2/URMQnJWJ0om6yAOnDGlFMZEQfPJo4VCZ'
  )
  // Polygon
  // 137: new ethers.providers.JsonRpcProvider(137, 'https://polygon-rpc.com'),
  // // Avalanche
  // 43114: new ethers.providers.JsonRpcProvider(
  //   43114,
  //   'https://api.avax.network/ext/bc/C/rpc'
  // )
}

// prod
export const usdcTokenAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
// rinkeby
// export const usdcTokenAddress = '0x4e2eeB8D66131463C14D07c974bDb12c8F4B5E6A'
export const ticketTokenAddress = '0xdd4d117723C257CEe402285D3aCF218E9A8236E1'
// export const ticketTokenAddress = '0x325E456e8Ac0bCB65a5515FA70B6b9D581809c36'

// export const PrizePoolNetwork = new PoolNetwork(providers, testnet)
export const PrizePoolNetwork = new PoolNetwork(providers, mainnet)

const chainId = 1
// const prizePoolAddress = '0xB452d71016Ed5f4FE98707b33C005fE9E17Fba19'
const prizePoolAddress = '0xd89a09084555a7D0ABe7B111b1f78DFEdDd638Be'

export const prizePool = PrizePoolNetwork.getPrizePool(
  chainId,
  prizePoolAddress
)
