import { Contract, Wallet, ethers, BigNumber } from 'ethers'
import { TransactionReceipt } from '@ethersproject/providers'

import Erc20Abi from './abis/Erc20Abi.json'
import { isAddress, isContract } from '../utils/tools'

class ERC20Service {
  provider: ethers.providers.Web3Provider
  contract: Contract

  constructor(provider: any, tokenAddress: string, signerAddress?: string) {
    this.provider = provider
    if (signerAddress) {
      const signer: Wallet = provider.getSigner()
      this.contract = new ethers.Contract(
        tokenAddress,
        Erc20Abi,
        provider
      ).connect(signer)
    } else {
      this.contract = new ethers.Contract(tokenAddress, Erc20Abi, provider)
    }
  }

  // READ FUNCTIONS
  // ==============

  get address(): string {
    return this.contract.address
  }

  get getContract(): Contract {
    return this.contract
  }

  allowance = async (owner: string, spender: string): Promise<BigNumber> => {
    return this.contract.allowance(owner, spender)
  }

  balanceOf = async (account: string): Promise<BigNumber> => {
    const balance = await this.contract.balanceOf(account)
    return BigNumber.from(balance)
  }

  isValidErc20 = async (): Promise<boolean> => {
    try {
      if (!isAddress(this.contract.address)) {
        throw new Error('Is not a valid erc20 address')
      }

      if (!isContract(this.provider, this.contract.address)) {
        throw new Error('Is not a valid contract')
      }

      const [decimals, symbol] = await Promise.all([
        this.contract.decimals(),
        this.contract.symbol()
      ])

      return !!(decimals && symbol)
    } catch (err) {
      return false
    }
  }

  // WRITE FUNCTIONS
  // ===============

  transferFrom = async (
    from: string,
    to: string,
    amount: BigNumber
  ): Promise<TransactionReceipt> => {
    const tx = await this.contract.transferFrom(from, to, { value: amount })
    return tx
  }

  transfer = async (
    to: string,
    amount: BigNumber
  ): Promise<TransactionReceipt> => {
    const tx = await this.contract.transfer(to, { value: amount })
    return tx
  }

  approve = async (
    spenderAccount: string,
    amount: BigNumber
  ): Promise<TransactionReceipt> => {
    const tx = await this.contract.approve(spenderAccount, { value: amount })
    return tx
  }

  approveUnlimited = async (
    spenderAccount: string
  ): Promise<TransactionReceipt> => {
    const tx = await this.contract.approve(spenderAccount, {
      value: ethers.constants.MaxUint256
    })
    return tx
  }
}

export { ERC20Service }
