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

  removeItem = key => {
    return _ => this.setState({
      data: this.state.data.filter(x => x.key !== key)
    })
  }

  renderItem = ({ item, index }) => {
    return <Card
      {...item}
      key={item.key} />
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.root}
        data={this.state.data}
        renderItem={this.renderItem}
        style={styles.list}>
      </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    minHeight: Dimensions.get('window').height,
    marginTop: 85,
  },
  list: {
    height: Dimensions.get('window').height,
  },
});

export default Cards