// Call all Reducers
import authReducer from './auth/authReducer.js'

import { combineReducers } from 'redux'
const RootReducer = combineReducers({
  getAuth: authReducer
})

export default RootReducer
