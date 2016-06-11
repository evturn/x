import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

import { connect } from 'react-redux'


import Record from './Record'

class RecordMap extends Component {
  constructor(props) {
    super(props)
    const rowHasChanged = (rowA, rowB) => rowA !== rowB
    const dataSource = new ListView.DataSource({ rowHasChanged })

    this.state = {
      dataSource: dataSource.cloneWithRows(props.records)
    }
  }

  renderHeader() {
    return (
      <View style={styles.divider}>
        <Text style={styles.header}>
          X
        </Text>
      </View>
    )
  }


  renderRow(x) {
    return (
      <Record {...x} />
    )
  }

  renderFooter(fetching) {
    return (
      <View style={styles.divider}>
        <Text>That's it.</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        style={{ marginTop: 25 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  divider: {
    padding: 8,
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

const mapStateToProps = ({ collection }) => ({ records: collection })


export default connect(mapStateToProps)(RecordMap)
