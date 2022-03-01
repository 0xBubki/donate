import { PrizePoolNetwork as PoolNetwork } from '@pooltogether/v4-client-js'
import { mainnet } from '@pooltogether/v4-pool-data'
import { ethers } from 'ethers'

const providers = {
  // Mainnet Ethereum
  1: ethers.getDefaultProvider(1),
  // Rinkeby
  4: ethers.getDefaultProvider(4)
  // Polygon
  // 137: new ethers.providers.JsonRpcProvider(137, 'https://polygon-rpc.com'),
  // // Avalanche
  // 43114: new ethers.providers.JsonRpcProvider(
  //   43114,
  //   'https://api.avax.network/ext/bc/C/rpc'
  // )
}

// prod
// export const usdcTokenAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
// rinkeby
export const usdcTokenAddress = '0xeb8f08a975ab53e34d8a0330e0d34de942c95926'

export const PrizePoolNetwork = new PoolNetwork(providers, mainnet)
