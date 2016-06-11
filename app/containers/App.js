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

  }

  componentDidMount() {
    this.loadInitialState().done()
  }

  async loadInitialState() {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      if (value !== null){

        this.setState(JSON.parse(value))
        this.appendAlert('Recovered selection from disk: ' + value.length)
      } else {
        this.appendAlert('Initialized with no selection on disk.')
      }
    } catch (error) {
      this.appendAlert('AsyncStorage error: ' + error.message)
    }
  }

  async saveCollection(data) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      this.appendAlert('Saved selection to disk: ');
    } catch (error) {
      this.appendAlert('AsyncStorage error: ' + error.message);
    }
  }

  async removeStorage() {
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
    const yes = this.props
    const yeah = this.state
    console.log(yes)
    console.log('=========')
    console.log(yeah)
    return <RecordMap />
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default connect(
  ({ collection }) => ({ collection })
)(App)
