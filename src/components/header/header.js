import React, { useCallback, useEffect, useRef, useState } from 'react'
import ImgLink from '@components/img_link'
import NavWrapper from '@components/header/nav_wrapper'
import NavItem from '@components/header/nav_item'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import { useReducer } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'

import LogoImg from '@src/assets/images/logo2.png'
import LogoSmallImg from '@src/assets/images/logo.png'
const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
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
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

const Header = () => {
  //
  let [fixed, setFixed] = useState('')
  let [menuOpen, setMenuOpen] = useState(false)
  let offsetTop = 0
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId } = state

  function checkMenu() {
    offsetTop = window?.pageYOffset
    if (offsetTop > 250) {
      if (fixed !== 'fixed animation') {
        setFixed('fixed animation')
      }
    } else if (offsetTop > 180) {
      if (fixed !== 'fixed') setFixed('fixed')
    } else if (offsetTop > 10) {
      setFixed('')
    }
  }

  function onMenuClicked() {
    console.log('abc')
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    document.addEventListener('scroll', checkMenu)
    return () => {
      document.removeEventListener('scroll', checkMenu)
    }
  }, [])

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = _hexChainId => {
        window.location.reload()
      }

      const handleDisconnect = () => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  return (
    <header className={`main_header ${fixed}`}>
      <div className="w-full">
        <div className="wallet-connection-wrapper container mx-auto flex justify-end font-bold text-lightest_gold pr-[25px] h-[50px] items-center">
          WALLET CONNECTED
          {/* <ImgLink
            className="mt-[5px] ml-[16px]"
            img={CardImg}
            width={25}
            height={21}
            onClick={() => connectWallet()}
          /> */}
          {web3Provider ? (
            <button className="button" type="button" onClick={disconnect}>
              Disconnect
            </button>
          ) : (
            <button className="button" type="button" onClick={connect}>
              Connect
            </button>
          )}
        </div>
        <div className="nav-menu-wrapper">
          <div className="container mx-auto flex justify-end bg-gray-100 relative">
            <div className="logo-big-img absolute left-[25px] top-[-35px]">
              <ImgLink img={LogoImg} width={130} height={150} />
            </div>

            <div className="logo-small-img absolute left-[25px] top-[10px]">
              <ImgLink img={LogoSmallImg} width={30} height={30} />
            </div>
            <div className={`mobile-button ${menuOpen ? 'active' : ''}`} onClick={onMenuClicked}>
              <span></span>
            </div>
            <NavWrapper className={`${menuOpen ? 'show-menu' : ''}`}>
              <NavItem onClick={() => onMenuClicked()} name="MEMBERSHIP" href="#membership" />
              <NavItem onClick={() => onMenuClicked()} name="ROADMAP" href="#roadmap" />
              <NavItem onClick={() => onMenuClicked()} name="TEAM" href="#team" />
              <NavItem onClick={() => onMenuClicked()} name="FAQ" href="#faq" />
              <NavItem onClick={() => onMenuClicked()} name="COMMUNITY VALUES" href="#community" />
            </NavWrapper>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
