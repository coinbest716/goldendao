import React, { useEffect, useState } from 'react'
import { faPlus, faMinus, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ethers } from 'ethers'
import ContractAbi from '@src/abi/GoldenDaoNFT.json'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {
  getMerkleProof,
  NFT_ADDRESS,
  getContractInfo,
  getPublicPrice,
  getPresalePrice,
  NETWORK_ID,
} from '@src/utils/helpers'
import { AbiCoder } from 'ethers/lib/utils'

export default function MintCompontent(props) {
  const { showLoader, setSoldCountFn } = props
  const { provider, web3Provider, address, chainId } = useSelector(store => store.wallet)
  const [count, setCount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [stagePrice, setStagePrice] = useState(0)
  const [stage, setStage] = useState(0)
  const [maxCount, setMaxCount] = useState(3)

  const increase = () => {
    if (count < 2) setCount(++count)
  }

  const decrease = () => {
    if (count > 1) setCount(--count)
  }

  const calculatePrcieAndStage = async () => {
    if (web3Provider != null) {
      const signer = web3Provider.getSigner()
      const GoldenDaoContract = new ethers.Contract(NFT_ADDRESS, ContractAbi, signer)
      const now = (await web3Provider.getBlock()).timestamp
      const { presaleStart, presaleEnd, publicStart, maxCount } = await getContractInfo(GoldenDaoContract)
      // console.log('presaleStart ' + presaleStart)
      // console.log('presaleEnd ' + presaleEnd)
      // console.log('publicStart ' + publicStart)
      // console.log('now ' + now)
      setMaxCount(maxCount)
      const price = 0
      if (now > presaleStart && now < presaleEnd) {
        setStage(1) //presale
        price = await getPresalePrice(GoldenDaoContract)
        setStagePrice(price)
      } else if (now > presaleEnd && now < publicStart) {
        setStage(2) //between preasale and public sale
        setStagePrice(0)
      } else if (now >= publicStart) {
        setStage(3) //public sale
        price = await getPublicPrice(publicStart, now, GoldenDaoContract)
        setStagePrice(price)
      }
    }
  }

  async function onMintClicked() {
    if (web3Provider == null) {
      toast('Connect Wallet')
      return
    }
    if (maxCount < count) {
      toast('Max count is ' + maxCount)
      return
    }

    if (chainId != NETWORK_ID) {
      //only for rinkeby
      toast.error('Please select Main net')
      return
    }

    if (isLoading == false) {
      setIsLoading(true)
      showLoader(true)
      calculatePrcieAndStage()
      const signer = web3Provider.getSigner()
      const GoldenDaoContract = new ethers.Contract(NFT_ADDRESS, ContractAbi, signer)
      const totalPrice = stagePrice * count
      const wei = ethers.utils.parseEther(totalPrice.toString())
      console.log(wei)
      if (stage == 1) {
        //presale
        const proof = getMerkleProof(address)
        await GoldenDaoContract.presaleMint(count, proof, { value: wei })
          .then(tx => {
            return tx.wait().then(
              receipt => {
                toast.success('Presale Success!')
                setSoldCountFn(count)
                return true
              },
              error => {
                console.log(error.message)
                toast.error('Presale Fail!')
              }
            )
          })
          .catch(error => {
            if (error.message.indexOf('Invalid proof') > 0) {
              toast.error("You aren't whitelisted!")
            } else if (error.message.indexOf('signature') > 0) {
              toast.error('You canceled transaction!')
            } else if (error.message.indexOf('Max per person') > 0) {
              toast.error("You can't mint any more")
            } else if (error.message.indexOf('err: insufficient funds') > 0) {
              toast.error('Insufficient funds for purchase')
            } else {
              console.log(error.message)
            }
          })
      } else if (stage == 3) {
        //public sale
        await GoldenDaoContract.publicMint(count, { value: wei })
          .then(tx => {
            return tx.wait().then(
              receipt => {
                setSoldCountFn(count)
                toast.success('Public Sale Success!')
                return true
              },
              error => {
                toast.error('Public sale Fail!')
                console.log(error.message)
              }
            )
          })
          .catch(error => {
            if (error.message.indexOf('not exist') > 0) {
              toast.error("You aren't whitelisted!")
            } else if (error.message.indexOf('signature') > 0) {
              toast.error('You canceled transaction!')
            } else if (error.message.indexOf('Max per person') > 0) {
              toast.error("You can't mint any more")
            } else if (error.message.indexOf('err: insufficient funds') > 0) {
              toast.error('Insufficient funds for purchase')
            } else {
              console.log(error)
            }
          })
      } else {
        toast.success('Sale is not started')
      }
      showLoader(false)
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   if (web3Provider == null) {
  //     toast('Connect Wallet')
  //   }
  //   if (web3Provider != null && chainId != 4) {
  //     toast.error('Please select Rinkeby net')
  //     return
  //   }
  //   calculatePrcieAndStage()
  // }, [])

  useEffect(() => {
    if (web3Provider == null) {
      toast('Connect Wallet')
      return
    }
    if (chainId != NETWORK_ID) {
      toast.error('Please Select MainNet')
      return
    }
    calculatePrcieAndStage()
  }, [web3Provider, address, chainId])
  return (
    <>
      <Toaster />
      {isLoading == false && (
        <div
          className={`mint-compontent-wrapper w-fit flex items-center ${props.className} bg-dark_black rounded-full`}
        >
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
            onClick={() => onMintClicked()}
          >
            {parseFloat(stagePrice).toPrecision(2) * count} ETH Mint
          </button>
        </div>
      )}
    </>
  )
}
