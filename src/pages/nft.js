import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import Image from 'next/image'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NFTImg from '@src/assets/images/nft.png'
import EtherScanBtn from '@src/assets/images/etherscan-btn.png'
export default function NFTDetail() {
  const router = useRouter()
  return (
    <div>
      <section className="container mx-auto  welcome-section center-container mt-[20px] ">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 flex justify-center md:mt-[0px] mt-[20px]">
            <NFTCard className="nft-card-shadow z-10" img={NFTImg} width={435} height={435}></NFTCard>
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
