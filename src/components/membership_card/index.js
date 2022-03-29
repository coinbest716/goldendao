import React from 'react'

export default function MemberShipCard(props) {
  return (
    <div
      className={`${props.className} w-[360px] membership-card bg-gradient-to-t from-darkest_gold to-dark_gold inline-block absolute opacity-80 hover:opacity-100`}
    >
      <div className="p-[20px]">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
    </div>
  )
}
