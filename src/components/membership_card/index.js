import React from 'react'
import Image from 'next/image'

export default function MemberShipCard(props) {
  return (
    <div
      className={`membership-card bg-gradient-to-t from-darkest_gold  to-dark_gold inline-block p-[20px] w-full ${props.className} relative opacity-80`}
    >
      {props.children}
      <div>
        <p className="text-white">{props.content}</p>
      </div>
    </div>
  )
}
