import React, { Component } from 'react'
import { Dimensions, Image, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from './Card';
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

  removeItem = id => {
    this.setState({
      data: this.state.data.filter(x => x.key !== id)
    })
  }

  renderItem = ({ item, index }) => {
    return <Card
      {...item}
      removeItem={this.removeItem}
      id={item.key}
      key={item.key} />
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          renderItem={this.renderItem}
          style={styles.list}>
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 65,
  },
  listContainer: {
    flex: 1,
    minHeight: Dimensions.get('window').height,
  },
  list: {
    flex: 1,
    bottom: 0,
  },
});

export default Cards