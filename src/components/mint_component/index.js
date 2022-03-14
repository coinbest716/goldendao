import React, { useEffect, useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MintCompontent(props) {
  const [count, setCount] = useState(1)
  const increase = () => {
    if (count < 5) setCount(++count)
  }

  const decrease = () => {
    if (count > 1) setCount(--count)
  }

  const onClickBtn = () => {
    alert('Mint pressed')
  }
  return (
    <div className={`mint-compontent-wrapper w-fit flex items-center ${props.className} bg-dark_black rounded-full`}>
      <FontAwesomeIcon
        icon={faMinus}
        onClick={() => decrease()}
        className="text-white cursor-pointer p-[8px] bg-dark_gold rounded-full ml-[8px] hover:bg-white hover:text-black"
      />
      <input
        className="mint-compontent-input text-[24px] text-center text-white border-none w-[80px] px-[16px]"
        value={count}
        disabled
      ></input>
      <FontAwesomeIcon
        icon={faPlus}
        onClick={() => increase()}
        className="text-white cursor-pointer p-[8px] bg-dark_gold rounded-full hover:bg-white hover:text-black"
      />
      <button
        className="text-white bg-gradient-to-t from-darkest_gold to-medium_gold hover:from-medium_gold hover:to-darkest_gold  h-[50px] lg:w-[180px] w-[140px] rounded-full ml-[16px]"
        onClick={() => onClickBtn()}
      >
        {0.88 * count}ETH Mint
      </button>
    </div>
  )
}
