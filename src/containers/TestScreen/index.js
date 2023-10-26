import {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TestScreen = props => {
  useEffect(() => {
    console.log('=========');
    console.log(props.route.params);
    console.log('=========');
  }, [props.route.params]);

  console.log('Test screen got rerendered');

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
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            props.navigation.navigate('Navigation', {});
            console.log('==Navigation==tested==');
          }}>
          <Text>Navigation params</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
