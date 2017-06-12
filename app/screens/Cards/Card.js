import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class Card extends Component {
  render() {
    const { description, image, title } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() =>this.props.removeItem(this.props.id)}>
            <View style={styles.close}>
              <Text style={styles.closeText}>×</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {

  },
  button: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 500,
    backgroundColor: 'transparent',
  },
  close: {
    marginTop: 5,
    marginRight: 5,
    height: 30,
    width: 30,
  },
  closeText: {
    fontSize: 26,
    color: '#ccc',
    fontWeight: '600',
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
