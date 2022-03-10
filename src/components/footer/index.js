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
        <ImgLink
          className="mt-[10px]"
          img={TwitterImg}
          width={38}
          height={38}
          path={process.env.REACT_APP_TWITTER}
          target="_blank"
        />
        <ImgLink img={DiscordImg} path={process.env.REACT_APP_DISCORD_URL} target="_blank" width={75} height={55} />
        <ImgLink
          className="mt-[10px]"
          img={InstagramImg}
          width={38}
          height={38}
          path={process.env.REACT_APP_INSTAGRAM}
          target="_blank"
        />
      </div>

      <div className="space-y-[30px] mt-[50px]">
        <div className="text-center">
          <span>CONNECT YOUR WALLET</span>
        </div>

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
