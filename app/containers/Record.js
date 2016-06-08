import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class Record extends Component {
  render() {
    return(
      <View>
        <Text>{this.props.value}</Text>
        <Text>{this.props.id}</Text>
        {this.props.children}
      </View>
    )
  }
}

export default Record
