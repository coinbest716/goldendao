import React from 'react'
import Image from 'next/image'

export default function ImageLink(props) {
  function onClickEvent() {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <a
      className="main-logo inline-block"
      target={props.target}
      href={props.path}
      onClick={onClickEvent}
      rel="noopener noreferrer"
    >
      <div className={`cursor-pointer ${props.className ? props.className : ''}`}>
        <Image alt="" src={props.img} width={props.width} height={props.height} />
      </div>
    </a>
  )
}
