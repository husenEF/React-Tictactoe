import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App2 extends Component {
  state = {};
  Icon = (s = 'X') => <Text style={{fontSize: 30}}>{s}</Text>;
  render() {
    return (
      <View style={Styles.container}>
        <Text>App 2</Text>
        <View style={Styles.boxContainer}>
          <View style={[Styles.box, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.Icon()}
          </View>
          <View style={[Styles.box, {borderTopWidth: 0}]}>{this.Icon()}</View>
          <View style={[Styles.box, {borderRightWidth: 0, borderTopWidth: 0}]}>
            {this.Icon()}
          </View>
        </View>
        <View style={Styles.boxContainer}>
          <View style={[Styles.box, {borderLeftWidth: 0}]}>{this.Icon()}</View>
          <View style={[Styles.box]}>{this.Icon()}</View>
          <View style={[Styles.box, {borderRightWidth: 0}]}>{this.Icon()}</View>
        </View>
        <View style={Styles.boxContainer}>
          <View
            style={[Styles.box, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
            {this.Icon()}
          </View>
          <View style={[Styles.box, {borderBottomWidth: 0}]}>
            {this.Icon()}
          </View>
          <View
            style={[Styles.box, {borderBottomWidth: 0, borderRightWidth: 0}]}>
            {this.Icon()}
          </View>
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
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
