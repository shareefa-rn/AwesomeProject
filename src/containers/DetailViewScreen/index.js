import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';

class DetailScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'pink',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text>{this.props.route.params.name}</Text>
        <Text>{this.props.route.params.version}</Text>
        <Text>{this.props.route.params.feature}</Text>
      </View>
    );
  }
}
export default DetailScreen;
