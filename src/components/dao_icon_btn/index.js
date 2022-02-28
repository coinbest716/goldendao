import React from 'react'
import Image from 'next/image'

export default function DaoIconButton(props) {
  let styles
  if (props.width) {
    styles = { ...styles, width: props.width }
  }
  return (
    <div
      className={`dao-btn-wrapper cursor-pointer flex justify-center align-middle text-white font-bold rounded ${props.className}`}
      style={styles}
    >
      {props.children}
    </div>
  )
}
