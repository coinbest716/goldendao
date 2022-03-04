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
    'Exclusive, priority, and complimentary access to GoldenDAO member meet-ups, parties across different cities including our much-anticipated launch party in April with special guests, celebrity appearances, and Andrew Yang as our host.',
  card12: 'Presale, skip the line access to future project drops.',
  card21: 'Access future GoldenDAO meet and greet events with special guests, hosts, headliners.',
  card22:
    'NFT gated members-only chat on Discord to collaborate and contribute to the future of GoldenDAO’s impact on the AAPI web3 community.',
  card31: 'Uniquely minted NFT representing founding membership.',
  card32: 'Member voting rights on GoldenDAO’s community wallet fund contributions and initiatives.',
  card33: 'VIP access to all of GoldenDAO’s Physical and Virtual events (+1 to all events guaranteed.',
}

const membershipContentFinal = {
  content:
    'IRL and virtual GoldenDAO gifts, including our prestigious made-to-fit, precious metal forged, silver sterling 18kg gold plated founding members signet ring, cross-referencing the NFT mint #. The ring is designed by Maxwell Amadeus Coombs, founder of streetwear brand Control Sector and an active designer for LVMH Hennessey merchandise. *Note that the inner section of ring is subject to change due to total mint #',
}

const imageList = [{ url: '/viewer/ring-1.jpg' }, { url: '/viewer/ring-2.jpg' }, { url: '/viewer/ring-3.jpg' }]

export default function MembershipCardViewer(props) {
  return (
    <div className={`membership-card-viewer ${props.className}`}>
      <div className={`grid xl:grid-cols-3 grid-cols-1 gap-[50px]`}>
        <div className="grid grid-flow-row col-span-1 space-y-[50px] text-center">
          <MemberShipCard className="xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card11}>
            <span className="w-[2px] h-[50px] bg-dark_gold absolute bottom-[-50px] right-[50%]" />
          </MemberShipCard>
          <MemberShipCard className="opacity xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card12}>
            <span className="w-[2px] xl:h-[115px] xl:bottom-[-115px] h-[50px] bottom-[-50px] bg-dark_gold absolute  right-[50%]" />
          </MemberShipCard>
        </div>
        <div className="grid grid-flow-row col-span-1 text-center">
          <MemberShipCard className="opacity xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card21}>
            <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[50%] left-[-50px] xl:inline-block hidden" />
            <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[50%] right-[-50px] xl:inline-block hidden" />
            <span className="w-[2px] h-[70px] bg-dark_gold absolute bottom-[-70px] right-[50%]" />
          </MemberShipCard>
          <MemberShipCard
            className="opacity mt-[70px] xl:w-[100%] sm:w-[450px] mx-auto"
            content={membershipContent.card22}
          >
            <span className="w-[2px] xl:h-[70px] xl:bottom-[-70px] h-[50px] bottom-[-50px] bg-dark_gold absolute  right-[50%]" />
            <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[80%] right-[-50px] xl:inline-block hidden" />
            <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[80%] left-[-50px] xl:inline-block hidden" />
          </MemberShipCard>
        </div>

        <div className="grid grid-flow-row col-span-1 space-y-[50px] text-center">
          <MemberShipCard className="opacity xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card31}>
            <span className="w-[2px] h-[50px] bg-dark_gold absolute bottom-[-50px] right-[50%]" />{' '}
          </MemberShipCard>
          <MemberShipCard className="opacity xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card32}>
            <span className="w-[2px] h-[50px] bg-dark_gold absolute bottom-[-50px] right-[50%]" />
          </MemberShipCard>
          <MemberShipCard className="opacity xl:w-[100%] sm:w-[450px] mx-auto" content={membershipContent.card33}>
            <span className="w-[2px] h-[70px] bg-dark_gold absolute bottom-[-70px] right-[50%] xl:inline-block hidden" />
          </MemberShipCard>
        </div>
      </div>

      <div className={`grid xl:grid-cols-3 grid-cols-1 xl:gap-[50px] mt-[70px]`}>
        <div className="col-span-1 relative xl:w-[100%] sm:w-[450px] sm:mx-auto m-[16px]">
          <div className="carousel-background" />
          <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            <div>
              <Image src={Diamond1} layout="responsive" />
            </div>
            <div>
              <Image src={Diamond2} layout="responsive" />
            </div>
            <div>
              <Image src={Diamond3} layout="responsive" />
            </div>
          </Carousel>
        </div>
        <div className="col-span-2 flex items-center flex-col">
          <MemberShipCard
            className="opacity xl:w-[100%] sm:w-[450px] mx-auto xl:mt-0 mt-[50px]"
            content={membershipContentFinal.content}
          />
          <DaoButton
            className="relative sm:w-[410px] w-[100%] mt-[50px] h-[60px]"
            onClick={() => (props.onMintBtnEvent ? props.onMintBtnEvent() : '')}
          >
            MINT YOUR NFT
          </DaoButton>
        </div>
      </div>
    </div>
  )
}
