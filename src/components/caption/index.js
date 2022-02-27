import React from 'react'

export default function Caption(props) {
  return (
    <div className="caption-wrapper">
      <h2 className="caption">{props.caption}</h2>
    </div>
  )
}
