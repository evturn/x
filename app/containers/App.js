import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native'

import { Provider } from 'react-redux'

import Input from '../components/Input'
import Button from '../components/Button'
import Record from './Record'

const STORAGE_KEY = '@XTest:messages'

const records = [
  {
    value: `I'm rolling on the top`,
    id: '1a'
  },{
    value: `I'm a record`,
    id: `1a-1`,
    parent: '1a'
  },{
    value: `I'm also a record`,
    id: `1a-2`,
    parent: '1a'
  },{
    value: `Yes I am a record`,
    id: `1a-3`,
    parent: '1a'
  },{
    value: `I'm rolling on the top also!`,
    id: '1b'
  }
]


class App extends Component {
  constructor() {
    super()

    this.state = {
      latest: 'Hi.',
      messages: [],
      alert: '',
      records: records
    }
  }

  componentDidMount() {
    this.loadInitialState().done()
  }

  async loadInitialState() {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      if (value !== null){
        const messages = JSON.parse(value)
        this.setState({
          latest: messages[0],
          messages
        })
        this.appendAlert('Recovered selection from disk: ' + value.length)
      } else {
        this.appendAlert('Initialized with no selection on disk.')
      }
    } catch (error) {
      this.appendAlert('AsyncStorage error: ' + error.message)
    }
  }

  async submitText(latest) {
    const messages = this.state.messages.concat(latest)

    this.setState({
      latest,
      messages
    })
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
      this.appendAlert('Saved selection to disk: ' + latest);
    } catch (error) {
      this.appendAlert('AsyncStorage error: ' + error.message);
    }


  }

  async removeStorage() {
    this.setState({
      latest: 'Hi.',
      messages: [],
      alert: ''
    })
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      this.appendAlert('Selection removed from disk.');
    } catch (error) {
      this.appendAlert('AsyncStorage error: ' + error.message);
    }
  }

  appendAlert(message) {
    this.setState({ alert: message })
  }

  renderRecords(records) {
    return records
      .filter(x => x.parent === undefined)
      .map(parent => {
        children = this.state.records.filter(record => record.parent === parent.id)
        return (
          <Record
            key={parent.id}
            value={parent.value}
            id={parent.id}>
            {children.map(x => <Record key={x.id}{...x} />)}
          </Record>
        )
      })

  }

  render() {
    return (

      <View style={styles.root}>
        <Text style={styles.header}>X</Text>
        <Text style={styles.header}>{this.state.latest}</Text>
        <Input />
        <Text>{this.state.alert}</Text>
        <Button>Press Down</Button>
        {this.renderRecords(this.state.records)}
        {this.state.messages.map(x => <Text key={x}>{x}</Text>)}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'helveticaneue-thin'
  }
})

export default App
