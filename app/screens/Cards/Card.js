import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

class Card extends Component {
  render() {
    const { description, image, title } = this.props;
    return (
      <View style={styles.item}>

        <View style={styles.itemContent}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          <View style={styles.description}>
            <Text
              numberOfLines={4}
              style={styles.descriptionText}>{description}</Text>
          </View>

          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  description: {
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 11,
    fontWeight: '200',
    lineHeight: 16,
    textAlign: 'left',
  },
  image: {
    resizeMode: 'cover',
    height: 125,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  itemContent: {
    backgroundColor: "#fff",
    borderRadius: 2,
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  root: {
    flex: 1,
    top: 75,
    justifyContent: 'flex-start',
    bottom: 0,
  },
  title: {
    marginVertical: 5,
  },
  titleText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#1E1F1F',
  },
});

export default Card;
