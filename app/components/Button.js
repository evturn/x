import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'

class Button extends Component {
  onButtonPress() {
    console.log('Pressed')
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={1}
        onPress={_ => this.onButtonPress()}>
        <Text style={styles.btnText}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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

export default Button
