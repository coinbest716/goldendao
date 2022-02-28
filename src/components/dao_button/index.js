import React from 'react'

export default function DaoButton(props) {
  let styles
  if (props.width) {
    styles = { ...styles, width: props.width }
  }
  return (
    <button className={`dao-btn-wrapper text-white font-bold rounded ${props.className}`} style={styles}>
      {props.children}
    </button>
  )
}
