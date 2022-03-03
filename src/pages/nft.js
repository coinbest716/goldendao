import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import Image from 'next/image'
import ImgLink from '@components/img_link'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NFTImg from '@src/assets/images/nft.png'
import EtherScanBtn from '@src/assets/images/etherscan-btn.png'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'

export default function NFTDetail() {
  const router = useRouter()
  return (
    <div>
      <div className="container mx-auto  md:flex justify-end space-x-[10px] xl:pr-[50px] pr-[10px] pt-[120px] hidden">
        <ImgLink img={TwitterImg} width={30} height={30} />
        <ImgLink
          className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5 "
          img={DiscordImg}
          width={43}
          height={33}
        />
        <ImgLink img={InstagramImg} width={30} height={30} />
      </div>
      <section className="container mx-auto  welcome-section center-container md:pt-[20px] pt-[120px] ">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 flex justify-center md:mt-[0px] mt-[20px]">
            <NFTCard className="nft-card-shadow z-[1]" img={NFTImg} width={435} height={435}></NFTCard>
          </div>

          <div className="basis-1/2 flex justify-center flex-col">
            <SectionInfo className="mb-[50px] nft-section-info" info_title="Your Goldendao membership starts here">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation commodo consequat.
              </p>
            </SectionInfo>
            <div className="">
              <Image src={EtherScanBtn} width={220} height={85} />
            </div>
          </div>
        </div>

        <div className="text-center mt-[140px]">
          <span
            className="text-lightest_gold cursor-pointer"
            onClick={e => {
              router.back()
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            BACK TO HOME
          </span>
        </div>
      </section>
    </div>
  )
}