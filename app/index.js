import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './containers/App'

const initialState = {
  record: [
    {
      value: `Top Level Record 1a`,
      id: '1a'
    },{
      value: `Child Level Record 1a-1`,
      id: `1a-1`,
      parent: '1a'
    },{
      value: `Child Level Record 1a-2`,
      id: `1a-2`,
      parent: '1a'
    },{
      value: `Child Level Record 1a-3`,
      id: `1a-3`,
      parent: '1a'
    },{
      value: `Top Level Record 1b`,
      id: '1b'
    }
  ]
}

const store = configureStore(initialState)

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
