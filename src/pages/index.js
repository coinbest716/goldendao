import Caption from '@src/components/caption'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import MembershipCardViewer from '@src/components/membership_card_viewer'
import Image from 'next/image'

import NFTImg from '@src/assets/images/nft.png'
import ImgLogo from '@src/assets/images/logo.png'
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

export default function Index() {
  return (
    <>
      <section className="welcome-section center-container mt-[20px] ">
        <div className="flex flex-row space-x-[50px]">
          <div className="basis-1/2 flex justify-center flex-col">
            <SectionInfo className="mb-[50px]" info_title={CaptionInfo['welcome']['caption']}>
              <p>{CaptionInfo['welcome']['content']}</p>
            </SectionInfo>
            <DaoButton width="280px">MINT YOUR NFT</DaoButton>
          </div>

          <div className="basis-1/2 flex justify-center">
            <NFTCard className="nft-card-shadow z-10" img={NFTImg} width={435} height={435}></NFTCard>
          </div>
        </div>
      </section>

      <section className="membership-section relative mt-[110px]">
        <div className="bg-special-shape w-full h-[2000px]"></div>
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['membership']['caption']}>
            <p className="mb-[36px]">{CaptionInfo['membership']['content1']}</p>
            <p>{CaptionInfo['membership']['content2']}</p>
          </SectionInfo>
        </div>
        <MembershipCardViewer className="mt-[80px] mx-[50px]" />
      </section>
      <section className="roadmap-section mt-[200px]">
        <SectionInfo info_title={CaptionInfo['roadmap']['caption']}></SectionInfo>
      </section>
      <section className="team-section center-container">
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
          <div className="artists-info grid grid-cols-2 pt-[20px]">
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
        <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption3']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </SectionInfo>
      </section>
      <section className="faq-section">
        <SectionInfo info_title={CaptionInfo['faq']['caption']}></SectionInfo>
      </section>
      <section className="community-section">
        <SectionInfo info_title={CaptionInfo['community']['caption1']}></SectionInfo>
        <SectionInfo info_title={CaptionInfo['community']['caption2']}></SectionInfo>
      </section>
    </>
  )
}
