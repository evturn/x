import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View
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
        {this.props.editing ? (
           <TextInput
            style={styles.text}
            onBlur={_ => this.setEditing(this.props.id)}
            value={this.props.value}
          />
        ) : (
         <Text
            style={styles.text}
            onPress={_ => this.setEditing(this.props.id)}>
            {this.props.value}
          </Text>
        )}
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

  },
  text: {
    height: 40,
    width: 200,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'helveticaneue-thin',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#cccccc'
  }
})

const mapDispatchToProps = dispatch => ({
  setRecordToEditing: id => dispatch(setRecordToEditing(id))
})

export default connect(state => state, mapDispatchToProps)(Record)
