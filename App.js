import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {isEqual} from 'lodash';

import {Block} from '@component';

const equals = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    console.log(`${a[i]}!==${b[i]}`);

    return a[i] !== b[i];
  }
  return true;
};

const Home = () => {
  const [isCross, setCros] = useState(true);
  const [dataCross, setDataCross] = useState([]);
  const [dataCircle, setDataCircle] = useState([]);
  const [winner, setWinner] = useState('');

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
  const check = () => {
    awnser.forEach((e, i) => {
      const x = isEqual(e.sort(), dataCross.sort());
      if (x) {
        setWinner('X');
      }

      const c = isEqual(e.sort(), dataCircle.sort());
      if (c) {
        setWinner('X');
      }
    });
    // awnser.map((e, i) => {
    //   const a = isEqual(e.sort(), [1, 2, 3].sort());
    //   console.log(`a - ${i}`, a, e.sort());
    // });
  };

  const resetData = () => {
    setCros(true);
    setDataCross([]);
    setDataCircle([]);
    setWinner();
  };

  useEffect(() => {
    console.log({dataCircle, dataCross});
    check();
  }, [dataCircle, dataCross]);

  useEffect(() => {
    if (winner) {
      Alert.alert('winner', `winner is :${winner}`, [
        {text: 'OK', onPress: () => resetData()},
      ]);
    }
  }, [winner]);

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
