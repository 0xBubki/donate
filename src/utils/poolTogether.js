import { PrizePoolNetwork } from '@pooltogether/v4-client-js'
import { mainnet } from '@pooltogether/v4-pool-data'
import { ethers } from 'ethers'

const providers = {
  // Mainnet Ethereum
  1: ethers.getDefaultProvider(1),
  // Rinkeby
  4: ethers.getDefaultProvider(4),
  // Polygon
  137: new ethers.providers.JsonRpcProvider(137, 'https://polygon-rpc.com'),
  // Avalanche
  43114: new ethers.providers.JsonRpcProvider(
    43114,
    'https://api.avax.network/ext/bc/C/rpc'
  )
}

export const PrizePoolNetwork = new PrizePoolNetwork(providers, mainnet)
