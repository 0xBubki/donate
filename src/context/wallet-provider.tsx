import { BigNumber } from '@ethersproject/bignumber'
import { useEtherBalance, useEthers, useLookupAddress } from '@usedapp/core'
import React from 'react'

type IWalletProviderContext = {
  activateBrowserWallet: () => void
  account?: string | null
  ens?: string | null
  etherBalance: BigNumber | 0
}

const WalletContext = React.createContext(
  null as unknown as IWalletProviderContext
)

export const WalletProvider = ({ children }: any) => {
  const { account, activateBrowserWallet } = useEthers()
  const ens = useLookupAddress()
  const etherBalance = useEtherBalance(account) || 0

  return (
    <WalletContext.Provider
      value={{ account, activateBrowserWallet, ens, etherBalance }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  return React.useContext(WalletContext)
}
