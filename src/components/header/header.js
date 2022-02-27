import React, { useCallback, useEffect, useState } from 'react'
import ImgLink from '@components/img_link'
import NavWrapper from '@components/header/nav_wrapper'
import NavItem from '@components/header/nav_item'

import LogoImg from '@src/assets/images/logo.png'
import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
const Header = () => {
  return (
    <header className="main_header">
      <div className="w-full">
        <div className="absolute left-0 bottom-50">
          <ImgLink img={LogoImg} width={75} height={75} />
        </div>

        <div className="flex justify-end">Wallet Connected</div>
        <div className="nav-menu-wrapper flex justify-end bg-gray-100">
          <NavWrapper>
            <NavItem />
            <NavItem />
            <NavItem />
          </NavWrapper>
        </div>

        <div className="flex justify-end space-x-4">
          <ImgLink img={TwitterImg} width={20} height={20} />
          <ImgLink img={DiscordImg} width={75} height={75} />
          <ImgLink img={InstagramImg} width={20} height={20} />
        </div>
      </div>
    </header>
  )
}

export default Header
