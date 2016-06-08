import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'


import Record from './Record'

class RecordMap extends Component {
  render() {
    return(
      <View style={styles.root}>
        {this.props.records.map((x, i) => (
          <View
            key={i}
            style={styles.record}>
            <Record {...x} />
          </View>
        ))}
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
  record: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    margin: 30,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

const mapStateToProps = ({ collection }) => ({ records: collection })


export default connect(mapStateToProps)(RecordMap)
