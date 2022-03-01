import React from 'react'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord1.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import ImgLink from '@components/img_link'
export default function Footer(props) {
  return (
    <footer
      className={`footer-wrapper flex justify-center flex-col text-white font-bold py-[70px] ${
        props.className ? props.className : ''
      }`}
    >
      <div className="flex space-x-[55px] justify-center">
        <ImgLink className="mt-[10px]" img={TwitterImg} width={38} height={38} />
        <ImgLink img={DiscordImg} width={75} height={55} />
        <ImgLink className="mt-[10px]" img={InstagramImg} width={38} height={38} />
      </div>

      <div className="space-y-[30px] mt-[50px]">
        <div className="text-center">
          <span>CONNECT YOUR WALLET</span>
        </div>

        <div className="text-center">
          <span>MEMBERSHIP</span>
        </div>

        <div className="text-center">
          <span>ROADMAP</span>
        </div>

        <div className="text-center">
          <span>TEAM</span>
        </div>

        <div className="text-center">
          <span>FAQ</span>
        </div>

        <div className="text-center">
          <span>COMMUNITY VALUES</span>
        </div>

        <div className="text-center">
          <span>CONTACT US</span>
        </div>
      </div>
    </footer>
  )
}