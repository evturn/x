import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class Record extends Component {
  render() {
    return(
      <View style={styles.root}>
        <Text style={!this.props.parent ? styles.recordMap : styles.child}>
          {this.props.children.length} | {this.props.value}
        </Text>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  recordMap: {
    fontSize: 20,
  },
  child: {
    fontSize: 16
  }
})

export default Record
