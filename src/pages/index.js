import React, { useEffect } from 'react'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import MembershipCardViewer from '@src/components/membership_card_viewer'
import Image from 'next/image'
import Faq from '@src/components/faq'
import MemberShipCard from '@src/components/membership_card'
import AllocationCard from '@src/components/allocation_card'
import DaoIconButton from '@src/components/dao_icon_btn'
import Roadmap from '@src/components/roadmap'
import ImgLink from '@components/img_link'

import NFTImg from '@src/assets/images/nft.png'
import ImgLogo from '@src/assets/images/logo.png'
import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'

import RoadmapBackground from '@src/assets/images/roadmap_bg.png'
import MembershipBackground from '@src/assets/images/tiger.png'
import CofounderBackground from '@src/assets/images/cofounder_bg.png'
import FaqBackground from '@src/assets/images/video_bg.png'

const CaptionInfo = {
  welcome: {
    caption: 'WELCOME TO GOLDENDAO',
    content:
      'A highly engaged, collaborative, and impact-focused community. Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives.',
  },
  membership: {
    caption: 'MEMBERSHIP',
    content1:
      'Become a member of GoldenDAO and join a core network of individuals contributing to the future of the web3 community across the metaverse and IRL.',
    content2: ' As a founding member, you will have access to:',
  },
  roadmap: {
    caption: 'ROADMAP',
  },
  team: {
    caption1: 'CORE FOUNDERS',
    caption2: 'ARTISTS / ENGINEEERS / COMMUNITY',
    caption3: 'MESSAGE FROM ANDREW',
  },
  faq: {
    caption: 'FREQUENTLY ASKED QUESTIONS',
  },
  community: {
    caption1: 'COMMUNITY VALUES',
    caption2: 'JOIN OUR COMMUNITY TODAY',
  },
}

const allocationCard = {
  title: 'NFT Allocation',
}

export default function Index() {
  return (
    <>
      <div className="container mx-auto  flex justify-end space-x-[10px] pr-[25px] pt-[120px]">
        <ImgLink img={TwitterImg} width={30} height={30} />
        <ImgLink
          className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5 "
          img={DiscordImg}
          width={43}
          height={33}
        />
        <ImgLink img={InstagramImg} width={30} height={30} />
      </div>
      <section className="container mx-auto  welcome-section center-container mt-[20px] ">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 flex justify-center flex-col">
            <SectionInfo className="mb-[50px]" info_title={CaptionInfo['welcome']['caption']}>
              <p>{CaptionInfo['welcome']['content']}</p>
            </SectionInfo>
            <DaoButton width="280px">MINT YOUR NFT</DaoButton>
          </div>

          <div className="basis-1/2 flex justify-center md:mt-[0px] mt-[20px]">
            <NFTCard className="nft-card-shadow z-[1]" img={NFTImg} width={435} height={435}></NFTCard>
          </div>
        </div>
      </section>

      <section id="membership" className="membership-section pt-[110px] relative">
        <div className="background">
          <Image src={MembershipBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>

        <div className="container mx-auto">
          <div className="center-container">
            <SectionInfo info_title={CaptionInfo['membership']['caption']}>
              <p className="mb-[36px]">{CaptionInfo['membership']['content1']}</p>
              <p>{CaptionInfo['membership']['content2']}</p>
            </SectionInfo>
          </div>
          <MembershipCardViewer className="mt-[80px] mx-[50px] relative" />
        </div>
      </section>
      <section id="roadmap" className="roadmap-section pt-[200px] relative">
        <div className="background">
          <Image src={RoadmapBackground} layout="fill" />
        </div>
        <div className="center mx-auto relative z-2">
          <SectionInfo className="center-container" info_title={CaptionInfo['roadmap']['caption']}></SectionInfo>
          <Roadmap className="center-container" />
        </div>
      </section>
      <section id="team" className="team-section mt-[200px] relative">
        <div className="background">
          <Image src={CofounderBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>
        <div className="center-container">
          <div className="text-center">
            <Image src={ImgLogo} alt="Golden Dao logo" width={250} height={250} />
          </div>
          <SectionInfo className="mt-[88px] space-y-[20px]" info_title={CaptionInfo['team']['caption1']}>
            <div className="founder-info text-center space-y-[50px] pt-[20px]">
              <p>ANDREW YANG</p>
              <p>JOHN DOE</p>
              <p>FRANK SINATRA</p>
            </div>
          </SectionInfo>

          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption2']}>
            <div className="artists-info grid md:grid-cols-2 grid-cols-1 pt-[20px]">
              <div className="col-1 text-center space-y-[50px]">
                <p>Celio Jyrki</p>
                <p>Lú Raylene</p>
                <p>Maud Metrodora</p>
                <p>Francisco Javier Miltiades</p>
                <p>Abbie Sulaiman</p>
                <p>Daiva Ros</p>
                <p>Prabodh Evandrus</p>
              </div>
              <div className="col-1 text-center space-y-[50px]">
                <p>Celio Jyrki</p>
                <p>Lú Raylene</p>
                <p>Maud Metrodora</p>
                <p>Francisco Javier Miltiades</p>
                <p>Abbie Sulaiman</p>
                <p>Daiva Ros</p>
                <p>Prabodh Evandrus</p>
              </div>
            </div>
          </SectionInfo>
        </div>
      </section>
      <section className="message-section mt-[170px] relative">
        <div className="center-container">
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption3']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </SectionInfo>

          <div className="w-full mt-[60px] relative z-[1]">
            <iframe
              className="mx-auto"
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/cTsEzmFamZ8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section id="faq" className="faq-section pt-[170px] relative">
        <div className="background">
          <Image src={FaqBackground} layout="fill" objectFit="scale-down" objectPosition="left" />
        </div>
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['faq']['caption']}></SectionInfo>
          <Faq className="pt-[40px]" />
          <AllocationCard title={allocationCard.title} className="mt-[100px] relative">
            <p>Public Sale (2000 mint total, priced at 1 ETH)</p>
            <br />
            <p>
              Presale (.80 ETH, 888 total): Saved for individuals who show commitment (via social media, discord
              engagement or other methods) to GoldenDAO initiatives, mission.
            </p>
            <br />
            <p>
              Reserves (200 total): Reserved for individuals, partners who show long term commitment to GoldenDAO
              initiatives, mission (i.e. social and community engagement, appearance, performance, MC at GoldenDAO
              in-person event, etc.).
            </p>
          </AllocationCard>
        </div>
      </section>
      <section id="community" className="community-section pt-[185px]">
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['community']['caption1']} className="text-center">
            <p>GoldenDAO community values are hinged upon supporting the Asian community through but not limited to:</p>
            <div className="dao-font-bold text-white space-y-[45px] mt-[65px]">
              <p>Combating social injustice</p>
              <p>Civic and community outreach</p>
              <p>Demystifying Asian mental health stigma</p>
              <p>Closing the gap on economic disparities</p>
              <p>
                Lifting up Asian culture, artistry, creatives in addition to promoting executive and thought leadership
              </p>
              <p>Allyship and advocacy</p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[180px]" info_title={CaptionInfo['community']['caption2']} />
          <div className="flex justify-center pt-[20px]">
            <DaoIconButton width="580px">
              <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="mt-[15px] ml-[8px] text-[19px]">JOIN DISCORD</span>
            </DaoIconButton>
          </div>
          <div className="flex justify-center mt-[50px]">
            <div className="w-[580px] singup-wrapper dao-btn-wrapper flex rounded">
              <input className="signup-info basis-3/4  rounded m-[2px] px-[4px]" />
              <button className="basis-1/4 dao-btn-wrapper text-white rounded">Sign up</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
