import React from 'react'
import Image from 'next/image'
import MemberShipCard from '@components/membership_card'
import DaoButton from '@components/dao_button'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Diamond1 from '@src/assets/images/viewer/ring-1.JPG'
import Diamond2 from '@src/assets/images/viewer/ring-2.JPG'
import Diamond3 from '@src/assets/images/viewer/ring-3.JPG'

const membershipContent = {
  card11:
    'Exclusive, priority, and complimentary access to GoldenDAO member meet-ups, parties across different cities including our much-anticipated launch party in March (NFT LA) with special guests, celebrity appearances, and Andrew Yang as our host',
  card12: 'Presale, skip the line access to future project drops.',
  card21: 'Access future GoldenDAO meet and greet events with special guests, hosts, headliners',
  card22:
    'NFT gated members-only chat on Discord to collaborate and contribute to the future of GoldenDAO’s impact on the AAPI web3 community.',
  card31: 'Uniquely minted NFT representing founding membership',
  card32: 'Member voting rights on GoldenDAO’s community wallet fund contributions and initiatives.',
  card33: 'VIP access to all of GoldenDAO’s Physical and Virtual events <br/>■ +1 to all events guaranteed. <br/>■ GoldenDAO NFT tickets sent via airdrop to member wallets. Tickets can be used for exclusive event access, GoldenDAO merchandise, and exchanged with others in the community',
}

const membershipContentFinal = {
  content:
    'IRL and virtual GoldenDAO gifts, including our prestigious, precious metal forged, silver sterling 18K gold plated signet ring, cross-referencing the NFT mint #. The ring is designed by Max Coombs, founder of streetwear brand Control Sector, and an active designer for LVMH Hennessy merchandise.'
}

const imageList = [{ url: '/viewer/ring-1.jpg' }, { url: '/viewer/ring-2.jpg' }, { url: '/viewer/ring-3.jpg' }]

export default function MembershipCardViewer(props) {
  return (
    <div
      className={`membership-card-viewer xl:w-[1200px] xl:h-[920px] w-[360px] h-[2180px] mt-[80px] ${props.className}`}
    >
      <span className="w-[2px] h-[50px] bg-dark_gold absolute xl:top-[232px] xl:left-[180px] top-[232px] left-[180px]" />
      <span className="w-[2px] xl:h-[115px] xl:bottom-[-115px] h-[50px] bg-dark_gold absolute xl:top-[369px] xl:left-[180px]  top-[370px] left-[180px]" />
      {/* first column */}
      <MemberShipCard
        className="xl:top-0 xl:left-0 top-0 left-0 hover:top-[-30px] h-[232px] hover:h-[292px]"
        content={membershipContent.card11}
      ></MemberShipCard>

      <MemberShipCard
        className="xl:top-[282px] xl:left-0 top-[282px] left-0 hover:top-[252px] h-[88px] hover:h-[142px]"
        content={membershipContent.card12}
      ></MemberShipCard>

      {/* second column */}
      <span className="w-[2px] xl:h-[70px] h-[50px] bg-dark_gold absolute xl:top-[112px] xl:left-[588px] top-[532px] left-[180px]" />
      <span className="w-[2px] xl:h-[140px] xl:bottom-[-140px] h-[50px] bg-dark_gold absolute xl:top-[341px] xl:left-[588px] top-[742px] left-[180px]" />
      <MemberShipCard
        className="xl:top-0 xl:left-[410px] top-[420px] left-0 xl:hover:top-[-30px] hover:top-[390px] h-[112px] hover:h-[172px]"
        content={membershipContent.card21}
      ></MemberShipCard>
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[40px] xl:left-[360px] left-[-500px]" />
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[40px] xl:left-[770px] left-[-500px]" />

      <MemberShipCard
        className="xl:top-[182px] xl:left-[410px] top-[582px] left-0 xl:hover:top-[150px] hover:top-[552px] h-[160px] hover:h-[210px]"
        content={membershipContent.card22}
      ></MemberShipCard>
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[320px] xl:left-[360px] left-[-500px]" />
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[320px] xl:left-[770px] left-[-500px]" />

      {/* third column */}
      <span className="w-[2px] xl:h-[60px] h-[50px] bg-dark_gold absolute xl:top-[80px] xl:right-[192px] top-[872px] right-[180px]" />
      <span className="w-[2px] h-[50px] bg-dark_gold absolute xl:top-[251px] xl:right-[192px] top-[1034px] right-[180px]" />
      <span className="w-[2px] xl:h-[70px] h-[50px] bg-dark_gold absolute xl:top-[413px]  xl:right-[192px] top-[1196px] right-[180px]" />
      <MemberShipCard
        className="xl:top-0 xl:left-[820px] top-[792px] left-0 xl:hover:top-[-30px] hover:top-[762px] h-[80px] hover:h-[140px]"
        content={membershipContent.card31}
      ></MemberShipCard>
      <MemberShipCard
        className="xl:top-[138px] xl:left-[820px] top-[922px] left-0 xl:hover:top-[108px] hover:top-[892px] h-[112px] hover:h-[172px]"
        content={membershipContent.card32}
      ></MemberShipCard>
      <MemberShipCard
        className="xl:top-[300px] xl:left-[820px] top-[1084px] left-0 xl:hover:top-[270px] hover:top-[1054px] h-[112px] hover:h-[172px]"
        content={membershipContent.card33}
      ></MemberShipCard>

      <div className="xl:top-[482px] xl:left-0 top-[1672px] left-0 xl:w-[360px] w-[340px] absolute">
        <div className="carousel-background" />
        <Carousel showThumbs={false} showArrows={true} showStatus={false} emulateTouch={true} infiniteLoop={true}>
          <div>
            <Image alt="" src={Diamond1} layout="responsive" />
          </div>
          <div>
            <Image alt="" src={Diamond2} layout="responsive" />
          </div>
          <div>
            <Image alt="" src={Diamond3} layout="responsive" />
          </div>
        </Carousel>
      </div>
      {/* <span className="w-[2px] h-[70px] bg-dark_gold absolute top-[1196px] left-[180px] xl:hidden" /> */}
      <MemberShipCard
        className="xl:top-[482px] xl:left-[410px] top-[1246px] left-0 xl:w-[770px] xl:hover:top-[452px] hover:top-[1216px] xl:h-[184px] xl:hover:h-[244px] h-[376px] hover:h-[436px]"
        content={membershipContentFinal.content}
      />
      <DaoButton
        className="absolute xl:top-[675px] xl:left-[595px] top-[2082px] left-[15px] w-[330px] xl:w-[410] mt-[50px] h-[60px]"
        onClick={() => (props.onMintBtnEvent ? props.onMintBtnEvent() : '')}
      >
        MINT YOUR NFT
      </DaoButton>
    </div>
  )
}
