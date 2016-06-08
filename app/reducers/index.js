import { combineReducers } from 'redux'
import {
  SET_RECORD_TO_EDITING
} from '../actions'

const collection = (state=[], action) => {
  switch (action.type) {
    case SET_RECORD_TO_EDITING:
      return action.payload
    default:
      return state
  }
}

const createReducer = _ => (
  combineReducers({ collection })
)

export {
  createReducer
}
