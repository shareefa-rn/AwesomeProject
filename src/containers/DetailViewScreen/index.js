import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const DetailScreen = props => {
  const {route} = props;

  return (
    <View>
      <Text>{props.route.params.name}</Text>
      <Text>{props.route.params.version}</Text>
      <Text>{props.route.params.feature}</Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Settings');
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Goto Settings</Text>
      </TouchableOpacity>

      <Button
        title={'Go to dashboard at once'}
        onPress={() => {
          props.navigation.navigate('Dashboard');
        }}
      />
      <Button
        title={'Go back'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title={'Pop to top'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title={'Update params'}
        onPress={() => {
          props.navigation.setParams({
            city: 'London',
            country: 'UK',
          });
        }}
      />
    </View>
  );
};

export default DetailScreen;
