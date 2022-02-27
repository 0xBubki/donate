import { Contract, Wallet, ethers, BigNumber } from 'ethers'
import { TransactionReceipt } from '@ethersproject/providers'

import Erc721Abi from './abis/Erc721Abi.json'

class ERC721Service {
  provider: any
  contract: Contract

  constructor(provider: any, tokenAddress: string, signerAddress?: string) {
    this.provider = provider
    if (signerAddress) {
      const signer: Wallet = provider.getSigner()
      this.contract = new ethers.Contract(
        tokenAddress,
        Erc721Abi,
        provider
      ).connect(signer)
    } else {
      this.contract = new ethers.Contract(tokenAddress, Erc721Abi, provider)
    }
  }

  // READ FUNCTIONS
  // ==============

  mintPrice = async (): Promise<BigNumber> => {
    const price = await this.contract.tokenCost()
    return BigNumber.from(price)
  }

  maxMintPerTx = async (): Promise<string> => {
    const maxMint = await this.contract.maxMintPerTx()
    return maxMint
  }

  // WRITE FUNCTIONS
  // ===============

  mint = async (amount: number): Promise<TransactionReceipt> => {
    const price = await this.mintPrice()
    const ethToSend = price.mul(BigNumber.from(amount))
    const tx = await this.contract.mint(amount, { value: ethToSend })
    return tx
  }
}

export { ERC721Service }
