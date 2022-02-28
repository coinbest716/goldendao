import React from 'react'
import Image from 'next/image'

export default function MemberShipCard(props) {
  return (
    <div
      className={`membership-card bg-gradient-to-t from-darkest_gold  to-dark_gold inline-block p-[20px] ${props.className}`}
    >
      <p className="text-white">{props.content}</p>
    </div>
  )
}
