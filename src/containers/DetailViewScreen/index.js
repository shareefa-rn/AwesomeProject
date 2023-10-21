import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';

const DetailScreen = props => {
  const {route} = props;

  return (
    <View
      style={{
        backgroundColor: 'pink',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>{props.route.params.name}</Text>
      <Text>{props.route.params.version}</Text>
      <Text>{props.route.params.feature}</Text>
    </View>
  );
};

export default DetailScreen;
