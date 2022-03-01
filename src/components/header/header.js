import React, { useCallback, useEffect, useState } from 'react'
import ImgLink from '@components/img_link'
import NavWrapper from '@components/header/nav_wrapper'
import NavItem from '@components/header/nav_item'

import LogoImg from '@src/assets/images/logo2.png'
import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
const Header = () => {
  return (
    <header className="main_header">
      <div className="w-full">
        <div className="container mx-auto flex justify-end font-bold text-lightest_gold pr-[25px] h-[50px] items-center">
          WALLET CONNECTED
        </div>
        <div className="nav-menu-wrapper  mb-[20px]">
          <div className="container mx-auto flex justify-end bg-gray-100 relative">
            <div className="absolute left-[25px] top-[-35px]">
              <ImgLink img={LogoImg} width={130} height={150} />
            </div>
            <NavWrapper>
              <NavItem name="MEMBERSHIP" href="#membership" />
              <NavItem name="ROADMAP" href="#roadmap" />
              <NavItem name="TEAM" href="#team" />
              <NavItem name="FAQ" href="#faq" />
              <NavItem name="COMMUNITY VALUES" href="#community" />
            </NavWrapper>
          </div>
        </div>

        <div className="container mx-auto  flex justify-end space-x-[10px] pr-[25px]">
          <ImgLink img={TwitterImg} width={30} height={30} />
          <ImgLink
            className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5 "
            img={DiscordImg}
            width={43}
            height={33}
          />
          <ImgLink img={InstagramImg} width={30} height={30} />
        </div>
      </div>
    </header>
  )
}

export default Header
