import React from 'react'

export default function Caption(props) {
  return (
    <div className="caption-wrapper mb-[28px]">
      <h2 className="caption lightest_gold">{props.caption}</h2>
    </div>
  )
}
