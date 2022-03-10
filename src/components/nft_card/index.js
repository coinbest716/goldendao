import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function NFTCard(props) {
  const router = useRouter()
  function onClickCard() {
    router.push('/nft')
  }
  const stopPropagation = e => {
    e.stopPropagation()
    console.log('================')
  }
  return (
    <div
      className={`relative bg-gradient-to-t from-darkest_gold to-medium_gold inline-block p-[20px] rounded-[16px] ${props.className}`}
      onClick={e => onClickCard(e)}
    >
      <video width="690" className="video-tag" autoPlay muted loop onClick={e => stopPropagation(e)}>
        <source src="gd-token.mp4" type="video/mp4" />
        <source src="gd-token.mp4" type="video/ogg" />
        Your browser does not support HTML video.
      </video>

      <div className="text-center font-bold text-white my-[28px] space-y-[10px]">
        <p>MINT PRICE</p>
        {/* <p className="text-[15pt]">1 ETH (2,624.28$)</p> */}
        <p className="text-[15pt]">1 ETH</p>
      </div>
      <div className="absolute left-0 top-0 bottom-0 right-0 z-10"></div>
    </div>
  )
}
