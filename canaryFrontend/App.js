import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.container.backgroundColor}
      />
        <Text style={styles.welcome}>Esse projeto vai nos levar pra fora do brasil</Text>
        <Text style={styles.instructions}>Vamo começar a brincar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f6d7a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#f5fcff'
  },
  instructions: {
    textAlign: 'center',
    color: '#f5fcff',
    marginBottom: 5,
  },
});
