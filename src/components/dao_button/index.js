import React from 'react'

export default function DaoButton(props) {
  return (
    <button className="dao-btn-wrapper bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      {props.children}
    </button>
  )
}
