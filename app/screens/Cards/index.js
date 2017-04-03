import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardButton from './CardButton'

const data = [
  {
    title: 'Studies Show Age Increases Chance Of Death',
    image: 'https://placeholdit.imgix.net/~text?txtsize=28&bg=06abfc&txtclr=ffffff&txt=300%C3%97125&w=300&h=125',
    description: `See the thing is dolor sit Saskatchewan tilt-a-whirl consectetur adipiscing elit. Nullam dignissim nulla moss-covered claw et luctus pumphandle head lock suscipit Canadian neck breaker with a sledge hammer.`,
    key: 'card-1',
  }, {
    title: 'Money: What Is It?',
    image: 'https://placeholdit.imgix.net/~text?txtsize=28&bg=000000&txtclr=CE0300&txt=300%C3%97125&w=300&h=125',
    description: `Listen, per inceptos springboard arm drag off the top of a cage. In eget dolor odio. five-star leg sweep tempor enim Canadian headbutt eget interdum mi bionic spinebuster vitae.`,
    key: 'card-2',
  }, {
    title: 'Find Inspiration In Cooking Your Family And Your Dog',
    image: 'https://placeholdit.imgix.net/~text?txtsize=28&bg=06abfc&txtclr=ffffff&txt=300%C3%97125&w=300&h=125',
    description: `See the thing is dolor sit Saskatchewan tilt-a-whirl consectetur adipiscing elit. Nullam dignissim nulla moss-covered claw et luctus pumphandle head lock suscipit Canadian neck breaker with a sledge hammer.`,
    key: 'card-3',
  }, {
    title: 'You Will Not Regret Trying Water',
    image: 'https://placeholdit.imgix.net/~text?txtsize=28&bg=06abfc&txtclr=ffffff&txt=300%C3%97125&w=300&h=125',
    description: `Listen, per inceptos springboard arm drag off the top of a cage. In eget dolor odio. five-star leg sweep tempor enim Canadian headbutt eget interdum mi bionic spinebuster vitae.`,
    key: 'card-4',
  },
]

class Cards extends Component {
  static defaultProps = {
    data
  }

  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({data: this.props.data})
  }

  removeItem = key => {
    return _ => this.setState({
      data: this.state.data.filter(x => x.key !== key)
    })
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.root}>
        {this.state.data.map(({ description, image, key, title }) =>
          <View
            key={key}
            style={styles.item}>

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
          </View>)}
      </ScrollView>
    )
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
    margin: 5,
  },
  itemContent: {
    backgroundColor: "#fff",
    borderRadius: 2,
    margin: 15,
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
    fontSize: 11,
    fontWeight: '400',
    color: '#1E1F1F',
  },
});

export default Cards