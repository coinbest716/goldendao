import React from 'react'
import Caption from '@components/caption'

export default function SectionInfo(props) {
  return (
    <div className="section-info-wrapper">
      <Caption caption={props.info_title} />
      {props.children}
    </div>
  )
}
