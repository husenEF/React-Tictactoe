import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Block} from '@component';

const Home = () => {
  const [isCross, setCros] = useState(true);
  const [dataCross, setDataCross] = useState([]);
  const [dataCircle, setDataCircle] = useState([]);

  const awnser = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 4, 9],
    [3, 5, 7],
  ];

  const click = id => {
    console.log({id});
    if (isCross) {
      const x = dataCross;
      x.push(id);
      setDataCross(x);
    } else {
      const c = dataCircle;
      c.push(id);
      setDataCircle(c);
    }
    togglePlayer();
  };

  const togglePlayer = () => setCros(!isCross);
  const check = () => {};

  useEffect(() => {
    console.log({dataCircle, dataCross});
  }, [dataCircle, dataCross]);
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Block id={1} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={2} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={3} click={click} dataX={dataCross} dataC={dataCircle} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Block id={4} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={5} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={6} click={click} dataX={dataCross} dataC={dataCircle} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Block id={7} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={8} click={click} dataX={dataCross} dataC={dataCircle} />
        <Block id={9} click={click} dataX={dataCross} dataC={dataCircle} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Main App</Text>
      <Home />
    </View>
  );
};

export default App;
