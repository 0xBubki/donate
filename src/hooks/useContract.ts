import { useMemo } from 'react'
import { useWallet } from '../context/wallet-provider'
import { ERC721Service } from '../services/ERC721Service'
import { useWeb3Provider } from './useWeb3Provider'

export const useContract = (address: string) => {
  const provider = useWeb3Provider()
  const { account } = useWallet()

  const contract = useMemo(() => {
    if (provider) {
      return new ERC721Service(provider, address, account)
    }
  }, [account, address, provider])

  return contract
}
