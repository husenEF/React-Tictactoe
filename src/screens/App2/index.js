import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App2 extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>App 2</Text>
        <View style={Styles.boxContainer}>
          <View style={Styles.box} />
          <View style={Styles.box} />
          <View style={Styles.box} />
        </View>
        <View style={Styles.boxContainer}>
          <View style={Styles.box} />
          <View style={Styles.box} />
          <View style={Styles.box} />
        </View>
        <View style={Styles.boxContainer}>
          <View style={Styles.box} />
          <View style={Styles.box} />
          <View style={Styles.box} />
        </View>
      </View>
    );
  }
}

export default App2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
});
