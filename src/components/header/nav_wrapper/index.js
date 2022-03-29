import React from 'react'

export default function NavWrapper(props) {
  return <div className={`nav-item-wrapper h-[50px] ${props.className}`}>{props.children}</div>
}
