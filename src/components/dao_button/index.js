import React from 'react'

export default function DaoButton(props) {
  let styles
  if (props.width) {
    styles = { ...styles, width: props.width }
  }
  return (
    <button
      className={`bg-gradient-to-t from-darkest_gold to-medium_gold hover:from-medium_gold hover:to-darkest_gold text-white font-bold rounded ${props.className}`}
      style={styles}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  )
}
