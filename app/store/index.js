import { createStore, applyMiddleware, compose } from 'redux'
import { createReducer } from '../reducers'
import { reduxObservable } from 'redux-observable'

const configureStore = initialState => {
  const middlewares = [
    reduxObservable()
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
