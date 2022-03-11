import React, { useCallback, useEffect, useState } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { providers as web3Providers } from 'web3modal'
import { useSelector, useDispatch } from 'react-redux'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { setWeb3Provider, setAddress, resetAddress } from '@src/redux/actions/web3Actions'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord1.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import ImgLink from '@components/img_link'

export default function Footer(props) {
  // const walletState = useSelector(store => store.wallet)

  // const { provider, web3Provider, address, chainId } = walletState
  // const dispatch = useDispatch()

  // const connect = useCallback(async function () {
  //   try {
  //     // This is the initial `provider` that is returned when
  //     // using web3Modal to connect. Can be MetaMask or WalletConnect.
  //     const provider = await web3Modal.connect()

  //     // We plug the initial `provider` into ethers.js and get back
  //     // a Web3Provider. This will add on methods from ethers.js and
  //     // event listeners such as `.on()` will be different.
  //     const web3Provider = new providers.Web3Provider(provider)

  //     const signer = web3Provider.getSigner()
  //     const address = await signer.getAddress()

  //     const network = await web3Provider.getNetwork()
  //     dispatch(setWeb3Provider({ provider, web3Provider, address, chainId: network.chainId }))
  //   } catch (e) {
  //     console.log('Error on Connection wallet')
  //   }
  // }, [])

  // const disconnect = useCallback(
  //   async function () {
  //     await web3Modal.clearCachedProvider()
  //     if (provider?.disconnect && typeof provider.disconnect === 'function') {
  //       await provider.disconnect()
  //     }
  //     dispatch(resetAddress())
  //   },
  //   [provider]
  // )

  // // Auto connect to the cached provider
  // useEffect(() => {
  //   if (web3Modal.cachedProvider) {
  //     connect()
  //   }
  // }, [connect])

  // // A `provider` should come with EIP-1193 events. We'll listen for those events
  // // here so that when a user switches accounts or networks, we can update the
  // // local React state with that new information.
  // useEffect(() => {
  //   if (provider?.on) {
  //     const handleAccountsChanged = accounts => {
  //       // eslint-disable-next-line no-console
  //       dispatch(setAddress(accounts[0]))
  //     }

  //     // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
  //     const handleChainChanged = _hexChainId => {
  //       window.location.reload()
  //     }

  //     const handleDisconnect = () => {
  //       // eslint-disable-next-line no-console
  //       console.log('disconnect', error)
  //       disconnect()
  //     }

  //     provider.on('accountsChanged', handleAccountsChanged)
  //     provider.on('chainChanged', handleChainChanged)
  //     provider.on('disconnect', handleDisconnect)

  //     // Subscription Cleanup
  //     return () => {
  //       if (provider.removeListener) {
  //         provider.removeListener('accountsChanged', handleAccountsChanged)
  //         provider.removeListener('chainChanged', handleChainChanged)
  //         provider.removeListener('disconnect', handleDisconnect)
  //       }
  //     }
  //   }
  // }, [provider, disconnect])
  return (
    <footer
      className={`footer-wrapper flex justify-center flex-col text-white font-bold py-[70px] ${
        props.className ? props.className : ''
      }`}
    >
      <div className="flex space-x-[55px] justify-center">
        <ImgLink
          className="mt-[10px]"
          img={TwitterImg}
          width={38}
          height={38}
          path="https://twitter.com/Goldendaoxyz"
          target="_blank"
        />
        <ImgLink img={DiscordImg} path="https://discord.gg/JNEHDqSh" target="_blank" width={75} height={55} />
        <ImgLink
          className="mt-[10px]"
          img={InstagramImg}
          width={38}
          height={38}
          path="https://www.instagram.com/goldendao/"
          target="_blank"
        />
      </div>

      <div className="space-y-[30px] mt-[50px]">
        {/* <div
          className="text-center cursor-pointer"
          onClick={() => {
            return web3Provider ? disconnect() : connect()
          }}
        >
          <span>CONNECT YOUR WALLET</span>
        </div> */}

        <div className="text-center">
          <span>
            <a href="#membership">MEMBERSHIP</a>
          </span>
        </div>

        <div className="text-center">
          <span>
            <a href="#roadmap">ROADMAP</a>
          </span>
        </div>

        <div className="text-center">
          <span>
            <a href="#team">TEAM</a>
          </span>
        </div>

        <div className="text-center">
          <span>
            <a href="#faq">FAQ</a>
          </span>
        </div>

        <div className="text-center">
          <span>
            <a href="#community">COMMUNITY VALUES</a>
          </span>
        </div>

        <div className="text-center">
          <span>
            <a href="mailto:hello@goldendao.xyz">CONTACT US</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
