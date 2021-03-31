import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Block} from '@component';

const App1 = () => {
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
    console.log({id, isCross});
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
    awnser.some(com => {
      return com.every(index => {
        return dataCircle.includes(index);
      });
    });
  };

  const resetData = () => {
    setCros(true);
    setDataCross([]);
    setDataCircle([]);
    setWinner();
  };

  useEffect(() => {
    console.log({
      dataCircle: dataCircle.toString(),
      dataCross: dataCross.toString(),
    });
    // check();
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
      <Text>
        {dataCircle.toString()} | {dataCross.toString()}
      </Text>
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

export default App1;
