import { createStore, applyMiddleware, compose } from 'redux'
import { createReducer, thunkmasterFlex } from '../reducers'

const configureStore = initialState => {
  const middlewares = [
    thunkmasterFlex
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  )

  return store
}

export default configureStore
