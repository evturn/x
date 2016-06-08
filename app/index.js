import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './containers/App'

const data = [
    {
      value: `1a`,
      id: '1a'
    },{
      value: `1a-1`,
      id: `1a-1`,
      parent: '1a'
    },{
      value: `1a-2`,
      id: `1a-2`,
      parent: '1a'
    },{
      value: `1a-3`,
      id: `1a-3`,
      parent: '1a'
    },{
      value: `1b`,
      id: '1b'
    },{
      value: `1b-1`,
      id: `1b-2`,
      parent: '1b'
    },{
      value: `1b-2`,
      id: `1b-2`,
      parent: '1b'
    },{
      value: `2b`,
      id: `2b`,
      parent: '1b-2'
    },{
      value: `2b-1`,
      id: `2b-1`,
      parent: '2b'
    }
  ]

const store = configureStore({ record: data })

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
