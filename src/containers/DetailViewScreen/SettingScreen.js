import {} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';

const SettingScreen = props => {
  return (
    <View>
      <Button
        title={'Go to dashboard at once'}
        onPress={() => {
          props.navigation.navigate('Test Screen');
        }}
      />
      <Button
        title={'Go Back'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title={'pop to top'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title={'back to Home'}
        onPress={() => {
          //to pass props forward
          // props.navigation.navigate('Dashboard', {ddf:dfgf});

          //to pass props backward
          props.navigation.navigate({
            name: 'Test Screen',
            params: {batch: 5, topic: 'navigation data passing'},
            merge: true,
          });
        }}
      />
    </View>
  );
};

export default SettingScreen;
