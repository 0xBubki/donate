export const YIELD_DONATE_CONTRACT = ''
export const ZEROXAPI = 'https://api.0x.org/'

export const ALCHEMY_MAINNET_URL =
  process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_URL ?? ''
export const ALCHEMY_RINKBY_URL =
  process.env.NEXT_PUBLIC_ALCHEMY_RINKBY_URL ?? ''

if (!ALCHEMY_MAINNET_URL) {
  throw new Error('ALCHEMY_MAINNET_URL is not set')
}

if (!ALCHEMY_RINKBY_URL) {
  throw new Error('ALCHEMY_RINKBY_URL is not set')
}
