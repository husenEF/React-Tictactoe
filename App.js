import React from 'react';
import {View, Text} from 'react-native';

import {Block} from '@component';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Block />
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Text>Main App</Text>
      <Home />
    </View>
  );
};

export default App;
