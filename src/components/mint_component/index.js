import React, { useEffect, useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ethers } from 'ethers'
import ContractAbi from '@src/abi/GoldenDaoNFT.json'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

export default function MintCompontent(props) {
  const { provider, web3Provider, address, chainId } = useSelector(store => store.wallet)

  async function onMintClicked() {
    // if (web3Provider != null) {
    //   const signer = web3Provider.getSigner()
    //   const GoldenDaoContract = new ethers.Contract(process.env.REACT_APP_NFT_ADDRESS, ContractAbi, signer)
    //   try {
    //     await GoldenDaoContract.requestPrivateSale({ value: price })
    //       .then(tx => {
    //         return tx.wait().then(
    //           receipt => {
    //             // This is entered if the transaction receipt indicates success
    //             toast.success('Presale Success!')
    //             return true
    //           },
    //           error => {
    //             toast.error('Presale Fail!')
    //           }
    //         )
    //       })
    //       .catch(error => {
    //         if (error.message.indexOf('not exist') > 0) {
    //           toast.error("You aren't whitelisted!")
    //         } else if (error.message.indexOf('signature')) {
    //           toast.error('You canceled transaction!')
    //         } else {
    //           toast.error(error.message)
    //         }
    //       })
    //   } catch (error) {
    //     toast.error('Presale Fail!')
    //   }
    // }
  }

  const [count, setCount] = useState(1)
  const increase = () => {
    if (count < 2) setCount(++count)
  }

  const decrease = () => {
    if (count > 1) setCount(--count)
  }

  const onClickBtn = () => {
    toast.success('Coming Soon!')
    console.log(chainId)
  }
  return (
    <div className={`mint-compontent-wrapper w-fit flex items-center ${props.className} bg-dark_black rounded-full`}>
      <Toaster />
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
        {1.28 * count} ETH Mint
      </button>
    </div>
  )
}
