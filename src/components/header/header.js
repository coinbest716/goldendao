import React, { useCallback, useEffect, useRef, useState } from 'react'
import ImgLink from '@components/img_link'
import NavWrapper from '@components/header/nav_wrapper'
import NavItem from '@components/header/nav_item'
import Web3Modal from 'web3modal'

import LogoImg from '@src/assets/images/logo2.png'
import LogoSmallImg from '@src/assets/images/logo.png'

// let web3Modal
// if (typeof window !== 'undefined') {
//   web3Modal = new Web3Modal({
//     network: 'mainnet', // optional
//     cacheProvider: true,
//     providerOptions, // required
//   })
// }

const Header = () => {
  //
  let [fixed, setFixed] = useState('')
  let [menuOpen, setMenuOpen] = useState(false)
  let offsetTop = 0

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
  return (
    <header className={`main_header ${fixed}`}>
      <div className="w-full">
        <div className="wallet-connection-wrapper container mx-auto flex justify-end font-bold text-lightest_gold pr-[25px] h-[50px] items-center">
          WALLET CONNECTED
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
