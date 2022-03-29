//Action Types
export const SET_WEB3_PROVIDER = 'set_web3_provider'
export const SET_ADDRESS = 'set_address'
export const RESET_WEB3_PROVIDER = 'reset_web3_provider'
//Action Creator
export const setWeb3Provider = info => ({
  type: SET_WEB3_PROVIDER,
  provider: info.provider,
  web3Provider: info.web3Provider,
  address: info.address,
  chainId: info.chainId,
})

export const setAddress = address => ({
  type: SET_WEB3_PROVIDER,
  address: address,
})

export const resetAddress = () => ({
  type: RESET_WEB3_PROVIDER,
})
