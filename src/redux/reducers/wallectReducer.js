import { SET_WEB3_PROVIDER, SET_ADDRESS, RESET_WEB3_PROVIDER } from '@src/redux/actions/web3Actions'

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEB3_PROVIDER:
      return {
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      }

    case RESET_WEB3_PROVIDER:
      return initialState
    default:
      return { ...state }
  }
}

export default walletReducer
