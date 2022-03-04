import { ethers } from 'ethers'
import { useMemo } from 'react'
import { ERC721Service } from '../services/ERC721Service'

export const useWeb3Provider = () => {
  return useMemo(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      const WEB3 = window?.ethereum || window?.web3
      if (!WEB3) return

      return new ethers.providers.Web3Provider(WEB3, 'homestead')
    }
  }, [])
}
