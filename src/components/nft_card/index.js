import React from 'react'
import Image from 'next/image'

export default function NFTCard(props) {
  return (
    <div
      className={`bg-gradient-to-t from-darkest_gold to-medium_gold inline-block p-[20px] rounded-[16px] ${props.className}`}
    >
      <Image src={props.img} alt="Golden Dao logo" width={props.width} height={props.height} />
      <div className="text-center font-bold text-white my-[28px] space-y-[10px]">
        <p>MINT PRICE</p>
        <p className="text-[15pt]">3 ETH (8326.89$)</p>
      </div>
    </div>
  )
}
