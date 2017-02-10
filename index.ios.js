/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class WelcomeMessage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          Press to get a random direction
        </Text>
      </View>
    );}
}

const Arrow = ({ direction }) => {
  return <Image source={require('./images/arrow.png')} style={styles[direction]} />
}

export default class TSPayMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: 'left',
      showWelcome: true
    }
  }

  onPress = (event) => {
    let direction = 'left'
    if (Math.round(Math.random())) {
      direction = 'right'
    }
    this.setState({ showWelcome: false, direction })
  }

  render() {
    let content
    if (this.state.showWelcome) {
      content =  <WelcomeMessage />
    } else {
      content = <Arrow direction={this.state.direction} />
    }

    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        {content}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  left: {
    transform: [{ rotate: '90deg' }]
  },
  right: {
    transform: [{ rotate: '-90deg' }]
  }
});

AppRegistry.registerComponent('TSPayMe', () => TSPayMe);
