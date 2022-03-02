import React from 'react'
import Image from 'next/image'

export default function ImageLink(props) {
  function onClickEvent() {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <div className={` ${props.className ? props.className : ''}`}>
      <a className="cursor-pointer main-logo inline-block" onClick={onClickEvent}>
        <Image src={props.img} width={props.width} height={props.height} />
      </a>
    </div>
  )
}
