import { combineReducers } from 'redux'

const record = (state=[], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const createReducer = _ => (
  combineReducers({ record })
)

const thunkmasterFlex = ({ dispatch, getState }) => (
  next => (
    action => {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }

      return next(action)
    }
  )
)

export {
  createReducer,
  thunkmasterFlex
}
