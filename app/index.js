import React, { Component } from 'react'
import { Animated, Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BlurView } from 'expo'

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
        <BlurView
          tint="light"
          intensity={50}
          style={[StyleSheet.absoluteFill, styles.blur]}>
          <Image style={styles.image} source={uri} />
        </BlurView>
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.header}>
              <AnimatedText style={[styles.headerText, {opacity: this.state.opacity}]}>Accessor</AnimatedText>
            </View>
            <View style={styles.card}>
              <StupidButton title="Sup" />
              <StupidButton title="dog" />
              <StupidButton title="how" />
              <StupidButton title="are" />
              <StupidButton title="you" />
              <StupidButton title="doing" />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const uri = require('./static/logo.png')

const StupidButton = ({ title }) => {
  return (
    <View style={styles.button}>
      <Button
        onPress={e => console.log(`I'm a press event.`)}
        color="#fff"
        title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06abfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blur: {
    zIndex: 9,
    height: 65
  },
  image: {
    marginTop: 15,
    alignSelf: 'center',
    width: 40,
    height: 40
  },
  inner: {
    position: 'absolute',
    top: 200,
    right: 15,
    left: 15,
    maxWidth: 400,
    height: 200,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    margin: 0,
    backgroundColor: '#06abfc',
  },
  headerText: {
    color: '#fff',
    alignItems: 'flex-end',
    fontSize: 24,
    fontWeight: '300',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#06abfc',
    height: 40,
    width: 70,
    justifyContent: 'center',
    borderRadius: 2,
    margin: 5,
  },
  card: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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