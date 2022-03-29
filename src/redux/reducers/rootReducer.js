import walletReducer from '@src/redux/reducers/wallectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  wallet: walletReducer,
})

export default rootReducer
