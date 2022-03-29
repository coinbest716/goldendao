import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { providers as web3Providers } from 'web3modal'
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: 'https://bsc-dataseed.binance.org/',
        1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      },
      network: 'binance',
      chainId: 56,
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet',
    },
    options: {
      appName: 'Golden Dao', // Your app name
      networkUrl: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  if (!window.ethereum) {
    providerOptions['custom-metamask'] = {
      display: {
        logo: web3Providers.METAMASK.logo,
        name: 'Install MetaMask',
        description: 'Connect using browser wallet',
      },
      package: {},
      connector: async () => {
        window.open('https://metamask.io')
        throw new Error('MetaMask not installed')
      },
    }
  }

  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

export default web3Modal
