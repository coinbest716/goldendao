import React from 'react'

export default function AllocationCard(props) {
  return (
    <div
      className={`allocation-card bg-gradient-to-t from-darkest_gold to-dark_gold inline-block px-[40px] py-[25px] w-full text-white ${props.className}`}
    >
      <h2 className="title">{props.title}</h2>
      {props.children}
    </div>
  )
}
