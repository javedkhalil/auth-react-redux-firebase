// createStore for store
// applyMiddleware for redux-thunk
// compose for redux tools

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers'

// const store = createStore(RootReducer, applyMiddleware(thunk, logger))

const store = createStore(
  RootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

export default store

/////////////////////// minimal setup
// import { createStore } from 'redux'
// import RootReducer from './reducers'
// const store = createStore(RootReducer)
// export default store
