import React from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import NFTCard from '@src/components/nft_card'
import DaoIconButton from '@src/components/dao_icon_btn'
import CountDown from '@src/components/countdown'
import Image from 'next/image'
import ImgLink from '@components/img_link'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import EtherScanBtn from '@src/assets/images/etherscan-btn.png'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import TwitterWhiteImg from '@src/assets/social_links/twitter_white.svg'

export default function NFTDetail() {
  const router = useRouter()
  return (
    <div>
      <div className="container mx-auto md:flex justify-end space-x-[10px] xl:pr-[50px] pr-[10px] pt-[120px] hidden">
        <ImgLink img={TwitterImg} width={30} height={30} />
        <ImgLink
          className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5"
          img={DiscordImg}
          path={process.env.NEXT_PUBLIC_DISCORD_URL}
          target="_blank"
          width={43}
          height={33}
        />
        <ImgLink img={InstagramImg} width={30} height={30} />
      </div>
      <section className="container mx-auto welcome-section center-container md:pt-[20px] pt-[120px]">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 justify-center md:mt-[0px] mt-[20px] mb-[50px]">
            <NFTCard className="nft-card-shadow" width={690} height={388}></NFTCard>
          </div>

          <div className="basis-1/2">
            <div className="modal-wrapper">
              <h4 className="modal-title 2xl:text-[24px] lg:text-[18px] text-white">
                Minting Opens Saturday, March 12, 1:00pm EST
              </h4>
              <p className="2xl:text-[18px] md:text-[15px] text-[14px] text-white">
                Join our immersive community and be part of the core founding members by purchasing a founding member
                NFT key. We look forward to seeing you in person for our launch party with special guests, celebrity
                appearances, and our host, Andrew Yang.
              </p>
              <CountDown />
              <DaoIconButton className="2xl:w-[310px] md:w-[310px] 2xl:h-[60px] sm:h-[40px] h-[40px]">
                <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
                <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">JOIN DISCORD</span>
              </DaoIconButton>
              <DaoIconButton className="2xl:w-[370px] md:w-[340px] lg:mt-[20px] mt-[10px] 2xl:h-[60px] sm:h-[40px] h-[40px]">
                <Image className="mt-[5px]" src={TwitterWhiteImg} alt="Golden Dao logo" width={25} height={25} />
                <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">FOLLOW ON TWITTER</span>
              </DaoIconButton>
              <div className="flex 2xl:mt-[20px] lg:mt-[20px] mt-[10px]">
                <div className="2xl:w-[550px] md:w-[370px] singup-wrapper dao-btn-wrapper flex rounded 2xl:h-[60px] sm:h-[40px] h-[40px]">
                  <input className="signup-info basis-3/4  rounded m-[2px] px-[4px]" />
                  <button className="basis-1/4 dao-btn-wrapper text-white rounded font-extrabold 2xl:h-[60px] sm:h-[40px] h-[40px] w-[143px]">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-[140px]">
          <span
            className="text-lightest_gold cursor-pointer font-bold"
            onClick={e => {
              router.back()
            }}
          >
            <FontAwesomeIcon className="mr-[8px]" icon={faAngleLeft} />
            BACK TO HOME
          </span>
        </div>
      </section>
    </div>
  )
}
