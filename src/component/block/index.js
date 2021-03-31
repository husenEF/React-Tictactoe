import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Block = ({id, click, dataX, dataC}) => {
  // const isDisable =
  const isX = dataX.includes(id);
  const isC = dataC.includes(id);
  const isDisable = isX || isC ? true : false;
  // console.log({dataX, dataC});
  return (
    <TouchableOpacity
      disabled={isDisable}
      style={[Style.block, isX ? Style.bgX : null, isC ? Style.bgC : null]}
      onPress={() => click(id)}>
      <Text>Block - {id}</Text>
    </TouchableOpacity>
  );
};

export default Block;

const Style = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgX: {
    backgroundColor: 'blue',
  },
  bgC: {
    backgroundColor: 'pink',
  },
});
