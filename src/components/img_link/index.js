import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ImageLink(props) {
  const router = useRouter()
  const onClickEvent = () => {
    if (props.target !== '_blank') {
      router.push(props.path)
    }
  }

  return props.target === '_blank' ? (
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
  ) : (
    <a className="main-logo inline-block" onClick={onClickEvent}>
      <div className={`cursor-pointer ${props.className ? props.className : ''}`}>
        <Image alt="" src={props.img} width={props.width} height={props.height} />
      </div>
    </a>
  )
}
