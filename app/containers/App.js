import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native'

import { connect } from 'react-redux'

import Input from '../components/Input'
import Button from '../components/Button'
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

  renderRecordMap(records) {
    return records
      .filter(x => x.parent === undefined)
      .map(x => {
        x.records = this.props.record.filter(rec => rec.parent === x.id)
        return x
      })
      .map((x, i) => (
        <RecordMap
          key={i}
          value={x.value}
          id={x.id}
          records={x.records}
        />
      ))
  }

  render() {
    return (

      <View style={styles.root}>
        <Text style={styles.header}>X</Text>
        <Text style={styles.header}>{this.state.latest}</Text>
        <Input />
        <Text>{this.state.alert}</Text>
        <Button>Press Down</Button>
        {this.renderRecordMap(this.props.record)}
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

export default connect(
  ({ record }) => ({ record })
)(App)
