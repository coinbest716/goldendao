import MerkleTree from 'merkletreejs'
import keccak256 from 'keccak256'
import whiteListJson from '@src/utils/whitelist.json'
import { ethers } from 'ethers'

export const NFT_ADDRESS = '0x4328C55c61665c1470707C0A89aff7A28e9aB0Ab'
export const calculateTimeLeft = endDate => {
  // let year = new Date().getFullYear()
  let difference = +new Date(endDate) - +new Date()

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export function getMerkleProof(address) {
  const hashedAddresses = whiteListJson.map(addr => keccak256(addr))
  const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
    sortPairs: true,
  })
  const hashedAddress = keccak256(address)
  const proof = merkleTree.getHexProof(hashedAddress)
  console.log(proof)

  return proof
}

export async function getContractInfo(contract) {
  let presaleStart = await contract.presaleStart()
  let presaleEnd = await contract.presaleEnd()
  let publicStart = await contract.publicStart()
  const maxCount = await contract.PRESALE_MAX_PER_TX()
  const priceBigNumber = await contract.PRESALE_PRICE()
  presaleStart = presaleStart * 1000
  presaleEnd = presaleEnd * 1000
  publicStart = publicStart * 1000

  return {
    presaleStart,
    presaleEnd,
    publicStart,
    maxCount,
    priceBigNumber,
  }
}
