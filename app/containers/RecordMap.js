import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'
import Record from './Record'

class RecordMap extends Component {
  renderRecords(records) {
    return records ? (
      records.map((x, i) => {
        x.records = this.props.record.filter(rec => rec.parent === x.id)
        return x
      })
      .map((x, i) => (
        <Record
          key={i}
          {...x}>
          {this.renderRecords(x.records)}
        </Record>
      ))
    ) : null
  }

  render() {
    return(
      <Record
        value={this.props.value}
        id={this.props.id}>
        {this.renderRecords(this.props.records)}
      </Record>
    )
  }
}

export default connect(
  ({ record }) => ({ record })
)(RecordMap)
