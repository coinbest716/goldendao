import Caption from '@src/components/caption'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'

const CaptionInfo = {
  welcome: {
    caption: 'WELCOME TO GOLDENDAO',
    content:
      'A highly engaged, collaborative, and impact-focused community. Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives.',
  },
  membership: {
    caption: 'MEMBERSHIP',
    content:
      'Become a member of GoldenDAO and join a core network of individuals contributing to the future of the web3 community across the metaverse and IRL. As a founding member, you will have access to:',
  },
  loadmap: {
    caption: 'LOADMAP',
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
      <section className="welcome-section center-container">
        <div className="flex flex-row">
          <div className="basis-1/2 flex justify-center flex-col">
            <SectionInfo info_title={CaptionInfo['welcome']['caption']}>
              <p>{CaptionInfo['welcome']['content']}</p>
            </SectionInfo>
            <DaoButton>MINT YOUR NFT</DaoButton>
          </div>

          <div className="basis-1/2">awefjiawe</div>
        </div>
      </section>

      <section className="membership-section">
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['membership']['caption']}>
            <p>{CaptionInfo['membership']['content']}</p>
          </SectionInfo>
        </div>
      </section>
      <section className="roadmap-section">
        <SectionInfo info_title={CaptionInfo['loadmap']['caption']}></SectionInfo>
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
