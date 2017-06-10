import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Cards from './screens/Cards';

class Accessor extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Cards />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Accessor;