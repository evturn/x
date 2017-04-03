import React, { Component } from 'react'
import { Animated, Button, Image, Linking, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BlurView } from 'expo'
import Cards from './screens/Cards'

const AnimatedText = Animated.createAnimatedComponent(Text)

class Accessor extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    this.animate()

  }

  animate = () => {
    const { opacity } = this.state
    Animated.timing(opacity, {
      duration: 2500,
      toValue: 1
    })
    .start(() => {
      Animated.timing(opacity, {
        duration: 2500,
        toValue: 0
      })
      .start(this.animate)
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
        <View style={[StyleSheet.absoluteFill, styles.header]}>
          <Image style={styles.image} source={uri} />
        </View>
        <View style={styles.container}>
          <Cards />
        </View>
      </View>
    )
  }
}

const uri = require('./static/logo.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    zIndex: 9,
    height: 65,
    backgroundColor: '#06abfc',
  },
  image: {
    marginTop: 15,
    alignSelf: 'center',
    width: 40,
    height: 40
  },
  message: {
    position: 'absolute',
    bottom: -90,
    right: 35,
    left: 35,
    textAlign: 'center',
    color: '#039be6',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '200',
  },
})

export default Accessor