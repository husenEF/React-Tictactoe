import React from 'react';
import {View, Text} from 'react-native';
import {App2} from '@screens';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>Tic Tac Toe Game</Text>
      <App2 />
    </View>
  );
};

export default App;
