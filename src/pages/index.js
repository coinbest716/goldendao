import Caption from '@src/components/caption'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import MembershipCardViewer from '@src/components/membership_card_viewer'

import NFTImg from '@src/assets/images/nft.png'
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
    caption2: 'MESSAGE FROM ANDREW',
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
      <section className="welcome-section center-container mt-[20px]">
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

      <section className="membership-section relative">
        <div className="bg-special-shape w-full h-[2000px]"></div>
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['membership']['caption']}>
            <p className="mb-[36px]">{CaptionInfo['membership']['content1']}</p>
            <p>{CaptionInfo['membership']['content2']}</p>
          </SectionInfo>
        </div>
        <MembershipCardViewer className="mt-[80px] mx-[50px]" />
      </section>
      <section className="roadmap-section">
        <SectionInfo info_title={CaptionInfo['roadmap']['caption']}></SectionInfo>
      </section>
      <section className="team-section">
        <SectionInfo info_title={CaptionInfo['team']['caption1']}></SectionInfo>
        <SectionInfo info_title={CaptionInfo['team']['caption2']}></SectionInfo>
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
