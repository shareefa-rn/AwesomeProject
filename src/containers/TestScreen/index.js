import {} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TestScreen = props => {
  return (
    <SafeAreaView style={{}}>
      <View>
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            props.navigation.navigate('Hooks Screen', {});
            console.log('==Hooks==tested==');
          }}>
          <Text>Hooks Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            props.navigation.navigate('Home', {});
            console.log('==Home==tested==');
          }}>
          <Text>Flat List Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
