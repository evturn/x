import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const CardButton = ({ onPress, theme, title }) => {
  const color = {dark: '#fefefe', light: '#06abfc'}
  const backgroundColor = {dark: '#06abfc', light: '#fefefe'}

  return (
    <View style={[styles.button, {backgroundColor: backgroundColor[theme]}]}>
      <Button
        onPress={onPress}
        color={color[theme]}
        title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 2,
    margin: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
})

export default CardButton