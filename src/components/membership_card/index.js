import React from 'react'
import Image from 'next/image'

export default function MemberShipCard(props) {
  return (
    <div
      className={`${props.className} w-[360px] membership-card bg-gradient-to-t from-darkest_gold  to-dark_gold inline-block   absolute opacity-80 hover:opacity-100`}
    >      
        <div className="abc p-[20px]">
          <p className="text-white">{props.content}</p>
        </div>
      </div>
  )
}
