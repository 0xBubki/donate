import { Contract, Wallet, ethers, BigNumber } from 'ethers'
import {
  TransactionReceipt,
  TransactionResponse
} from '@ethersproject/providers'

import Erc721Abi from './abis/Erc721Abi.json'

class ERC721Service {
  provider: any
  contract: Contract

  constructor(
    provider: any,
    tokenAddress: string,
    signerAddress?: string | null
  ) {
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

  maxSupply = async (): Promise<string> => {
    const maxSupply = await this.contract.MAX_SUPPLY()
    return maxSupply
  }

  ukraineAddress = async (): Promise<string> => {
    const ukraineAddress = await this.contract.UKRAINE_ETH_ADDRESS()
    return ukraineAddress
  }

  balanceOf = async (account: string): Promise<string> => {
    const balanceOf = await this.contract.balanceOf(account)
    return balanceOf
  }

  baseUri = async (): Promise<string> => {
    const baseUri = await this.contract.baseURI()
    return baseUri
  }

  isSaleActive = async (): Promise<boolean> => {
    const isSaleActive = await this.contract.isSaleActive()
    return isSaleActive
  }

  name = async (): Promise<string> => {
    const name = await this.contract.name()
    return name
  }

  ownerOf = async (tokenId: BigNumber): Promise<string> => {
    const ownerOf = await this.contract.ownerOf(tokenId)
    return ownerOf
  }

  tokenUri = async (tokenId: BigNumber): Promise<string> => {
    const tokenUri = await this.contract.tokenURI(tokenId)
    return tokenUri
  }

  totalSupply = async (): Promise<string> => {
    const totalSupply = await this.contract.totalSupply()
    return totalSupply
  }

  // WRITE FUNCTIONS
  // ===============

  mint = async (amount: number): Promise<TransactionReceipt> => {
    const price = await this.mintPrice()
    const ethToSend = price.mul(BigNumber.from(amount))
    const tx = await this.contract.mint(amount, { value: ethToSend })
    return tx
  }

  resMint = async (amount: number): Promise<TransactionResponse> => {
    const price = await this.mintPrice()
    const ethToSend = price.mul(BigNumber.from(amount))
    const tx = await this.contract.mint(amount, { value: ethToSend })
    return await tx.wait()
  }
}

export { ERC721Service }
