import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
} from 'react-native'

class Input extends Component {

  submitText(text) {
    this['🍟'].clear()
    console.log(text)
  }

  render() {
    return (
      <TextInput
        ref={x => this['🍟'] = x}
        style={styles.input}
        autoCorrect={false}
        onSubmitEditing={e => this.submitText(e.nativeEvent.text)}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#efefef',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    fontFamily: 'helveticaneue-thin'
  }
})

export default Input
