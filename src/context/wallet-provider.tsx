import React from 'react'

// Ethers
import { BigNumber } from '@ethersproject/bignumber'

// UseDapp
import { useEtherBalance, useEthers, useLookupAddress } from '@usedapp/core'

type IWalletProviderContext = {
  activateBrowserWallet: () => void
  account?: string | null
  ens?: string | null
  etherBalance: BigNumber | 0
  library: any
}

const WalletContext = React.createContext(
  null as unknown as IWalletProviderContext
)

export const WalletProvider = ({ children }: any) => {
  const { account, activateBrowserWallet, library } = useEthers()
  const ens = useLookupAddress()
  const etherBalance = useEtherBalance(account) || 0

  return (
    <WalletContext.Provider
      value={{ account, activateBrowserWallet, ens, etherBalance, library }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  return React.useContext(WalletContext)
}
