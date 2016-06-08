import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native'

import { connect } from 'react-redux'

import RecordMap from './RecordMap'

const STORAGE_KEY = '@XTest:messages'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latest: 'Hi.',
      messages: [],
      alert: ''
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

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.header}>X</Text>
        <RecordMap />
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
    marginTop: 30,
    fontFamily: 'helveticaneue-thin'
  }
})

export default connect(
  ({ collection }) => ({ collection })
)(App)
