import { Contract, Wallet, ethers, BigNumber } from 'ethers'
import { TransactionReceipt } from '@ethersproject/providers'

import MintingAbi from './abis/MintingAbi.json'

class ERC20Service {
  provider: any
  contract: Contract

  constructor(provider: any, tokenAddress: string, signerAddress?: string) {
    this.provider = provider
    if (signerAddress) {
      const signer: Wallet = provider.getSigner()
      this.contract = new ethers.Contract(
        tokenAddress,
        MintingAbi,
        provider
      ).connect(signer)
    } else {
      this.contract = new ethers.Contract(tokenAddress, MintingAbi, provider)
    }
  }

  // READ FUNCTIONS
  // ==============

  // TODO: Update to match contract spec
  mintPrice = async (): Promise<BigNumber> => {
    const price = await this.contract.mintPrice()
    return BigNumber.from(price)
  }

  // WRITE FUNCTIONS
  // ===============

  // TODO: Update to match contract spec
  mint = async (amount: number): Promise<TransactionReceipt> => {
    const price = await this.mintPrice()
    const ethToSend = price.mul(BigNumber.from(amount))
    const tx = await this.contract.mint(amount, { value: ethToSend })
    return tx
  }
}

export { ERC20Service }
