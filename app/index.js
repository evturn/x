import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from 'react-native'

const STORAGE_KEY = '@XTest:messages'

class X extends Component {
  constructor() {
    super()

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
    this['🍟'].clear()
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

    this['🍟'].focus()
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
        <Text style={styles.header}>{this.state.latest}</Text>
        <TextInput
          ref={x => this['🍟'] = x}
          style={styles.input}
          autoCorrect={false}
          onSubmitEditing={e => this.submitText(e.nativeEvent.text)}
        />
        <Text>{this.state.alert}</Text>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={1}
          onPress={_ => this.removeStorage()}
          >
          <Text style={styles.btnText}>Erase All</Text>
        </TouchableOpacity>
        {this.state.messages.map(x => <Text key={x}>{x}</Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'helveticaneue-thin'
  },
  input: {
    height: 40,
    backgroundColor: '#efefef',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    fontFamily: 'helveticaneue-thin'
  },
  btn: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#010101',
    borderRadius: 1
  },
  btnText: {
    fontFamily: 'helveticaneue-thin',
    color: '#ffffff'
  }
})


export default X
