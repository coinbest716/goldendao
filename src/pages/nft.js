import React from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import NFTCard from '@src/components/nft_card'
import DaoIconButton from '@src/components/dao_icon_btn'
import CountDown from '@src/components/countdown'
import Image from 'next/image'
import ImgLink from '@components/img_link'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { postUrl } from '@src/common'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignupOnNFT from '@src/components/signup/signup_nft'
import MintCompontent from '@src/components/mint_component'
// import EtherScanBtn from '@src/assets/images/etherscan-btn.png'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord1.svg'
import DiscordWhiteImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import TwitterWhiteImg from '@src/assets/social_links/twitter_white.svg'
import ClipLoader from 'react-spinners/ClipLoader'

export default function NFTDetail() {
  const router = useRouter()
  return (
    <div>
      <ClipLoader color="#eeeeee" loading={true} size={150} />
      <div className="container mx-auto  md:flex justify-end space-x-[10px] xl:pr-[50px] pr-[10px] pt-[120px] hidden">
        <ImgLink
          className="mt-[10px]"
          img={TwitterImg}
          width={38}
          height={38}
          path="https://twitter.com/Goldendaoxyz"
          target="_blank"
        />
        <ImgLink img={DiscordImg} path="https://discord.gg/goldendao" target="_blank" width={75} height={55} />
        <ImgLink
          className="mt-[10px]"
          img={InstagramImg}
          width={38}
          height={38}
          path="https://www.instagram.com/goldendao/"
          target="_blank"
        />
      </div>
      <section className="container mx-auto welcome-section center-container md:pt-[20px] pt-[120px]">
        <div className="md:flex md:space-x-[50px] mt-[-50px]">
          <div className="basis-1/2 justify-center mt-[50px]">
            <NFTCard className="nft-card-shadow" width={690} height={388}></NFTCard>
            <div className="mt-[16px]">
              <MintCompontent className="m-auto"></MintCompontent>
            </div>
          </div>

          <div className="basis-1/2 mt-[50px]">
            <div className="modal-wrapper">
              <h4 className="modal-title 2xl:text-[24px] lg:text-[18px] text-white">
                Minting Opens March, 31, 2022 at 10am PST
              </h4>
              <p className="2xl:text-[18px] md:text-[15px] text-[14px] text-white">
                Join our immersive community and be a part of the core founding members by purchasing an NFT key. We
                look forward to seeing you in person for our launch party with special guests, celebrity appearances,
                and our host, Andrew Yang in LA on March 31st during NFT week, held exclusively for members and
                partners.
              </p>
              <CountDown />
              <DaoIconButton
                className="2xl:w-[370px] md:w-[310px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
                onClick={() => window.open('https://discord.gg/goldendao')}
              >
                <Image className="mt-[5px]" src={DiscordWhiteImg} alt="Golden Dao logo" width={26} height={26} />
                <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">JOIN DISCORD</span>
              </DaoIconButton>
              <DaoIconButton
                className="2xl:w-[370px] md:w-[310px] lg:mt-[20px] mt-[10px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
                onClick={() => window.open('https://twitter.com/Goldendaoxyz')}
              >
                <Image className="mt-[5px]" src={TwitterWhiteImg} alt="Golden Dao logo" width={25} height={25} />
                <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">FOLLOW ON TWITTER</span>
              </DaoIconButton>
              <div className="flex 2xl:mt-[20px] lg:mt-[20px] mt-[10px]">
                <MailchimpSubscribe
                  url={postUrl}
                  render={({ subscribe, status, message }) => (
                    <SignupOnNFT
                      status={status}
                      message={message}
                      onValidated={formdata => {
                        subscribe(formdata)
                      }}
                    />
                  )}
                />
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
