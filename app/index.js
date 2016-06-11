import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './containers/App'

const collection = [
  {
    value: `The note and its info`,
    editing: false,
    id: 1,
    setID: false,
    type: 'Record',
    set: []
  },{
    value: `A second note`,
    editing: false,
    id: 2,
    setID: false,
    type: 'Record',
    set: []
  },{
    value: `The newest note ever.`,
    editing: false,
    id: 3,
    setID: 1,
    type: 'Record',
    set: []
  },{
    value: `I am here.`,
    editing: false,
    id: 4,
    setID: 1,
    type: 'Record',
    set: []
  }
]

const store = configureStore({ collection })

class X extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default X
