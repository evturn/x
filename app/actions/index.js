import * as Rx from 'rxjs'

export const SET_RECORD_TO_EDITING = 'SET_RECORD_TO_EDITING'

const setRecordToEditing = id => (
  (actions, store) => (
    Rx.Observable.of(store.getState().collection)
      .map(x => x.map(x => {
        x.editing = id === x.id ? !x.editing : false
        return x
      }))
      .map(payload => ({ type: SET_RECORD_TO_EDITING, payload }))
  )
)

export {
  setRecordToEditing
}
