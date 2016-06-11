import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image
} from 'react-native'

import { connect } from 'react-redux'
import { setRecordToEditing } from '../actions'
import Button from '../components/Button'


class Record extends Component {
  constructor(props) {
    super(props)

    this.setEditing = props.setRecordToEditing.bind(this)
  }

  render() {
    return(
      <View style={styles.root}>
        <Image
          style={styles.img}
          source={{ uri: 'http://marshallz.com/dist/hs-borf.png' }}
        />
        <View style={styles.info}>
          <Text style={styles.value}>{this.props.value}</Text>
          <Text style={styles.id}>{this.props.id}</Text>
        </View>
      </View>
    )
  }
}

Record.propTypes = {
  editing: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.number
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  img: {
    flex: 1,
    height: 150,
    resizeMode: 'contain'
  },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20
  },
  value: {
    fontFamily: 'helveticaneue-thin',
    fontSize: 18
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const mapDispatchToProps = dispatch => ({
  setRecordToEditing: id => dispatch(setRecordToEditing(id))
})

export default connect(state => state, mapDispatchToProps)(Record)
