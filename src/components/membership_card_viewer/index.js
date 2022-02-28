import React from 'react'
import Image from 'next/image'
import MemberShipCard from '@components/membership_card'
import DaoButton from '@components/dao_button'
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
export default function MembershipCardViewer(props) {
  return (
    <div className={`membership-card-viewer ${props.className}`}>
      <div className={`grid grid-cols-3 gap-[50px]`}>
        <div className="col-span-1 space-y-[50px] ">
          <MemberShipCard content={membershipContent.card11} />
          <MemberShipCard className="opacity" content={membershipContent.card12} />
        </div>
        <div className="col-span-1 space-y-[50px]">
          <MemberShipCard className="opacity" content={membershipContent.card21} />
          <MemberShipCard className="opacity" content={membershipContent.card22} />
        </div>

        <div className="col-span-1 space-y-[50px]">
          <MemberShipCard className="opacity" content={membershipContent.card31} />
          <MemberShipCard className="opacity" content={membershipContent.card32} />
          <MemberShipCard className="opacity" content={membershipContent.card33} />
        </div>
      </div>

      <div className={`grid grid-cols-3 gap-[50px] mt-[70px]`}>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-center flex-col">
          <MemberShipCard className="opacity" content={membershipContentFinal.content} />
          <DaoButton className="relative w-[410px] mt-[50px]">MINT YOUR NFT</DaoButton>
        </div>
      </div>
    </div>
  )
}
