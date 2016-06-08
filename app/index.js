import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './containers/App'

const data = [
    {
      value: `Here is something`,
      id: `1a-2a`,
      parent: '1a'
    },{
      value: `I wrote this down`,
      id: `1a-2b-3a`,
      parent: '1a-2b'
    },{
      value: `Quick little thing`,
      id: `1a-2b`,
      parent: '1a'
    },{
      value: `RecordMap`,
      id: '1a',
      parent: false
    },{
      value: `My face is 😶`,
      id: `1a-2c`,
      parent: '1a'
    },{
      value: `Ideas`,
      id: `1b-2a`,
      parent: '1b'
    },{
      value: `Things I gotta do`,
      id: `1b-2b-3a`,
      parent: '1b-2b'
    },{
      value: `RecordMap`,
      id: '1b',
      parent: false
    },{
      value: `Eat food`,
      id: `1b-2b`,
      parent: '1b'
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
