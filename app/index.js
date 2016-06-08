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
    set: []
  },{
    value: `A second note`,
    editing: false,
    id: 2,
    setID: false,
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
