import {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {PersistanceHelper} from '../../helpers';

const TestScreen = props => {
  useEffect(() => {
    console.log('=========');
    console.log(props.route.params);
    console.log('=========');
  }, [props.route.params]);

  console.log('Test screen got rerendered');

  useEffect(() => {
    isAsyncFunction();
  });
  const isAsyncFunction = async () => {
    const myvalue = await PersistanceHelper.getValue('myKey');
    console.log(myvalue);
  };

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
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
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            props.navigation.navigate('Counter Screen', {});
            console.log('==LifeCycle==tested==');
          }}>
          <Text>LifeCycle Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            props.navigation.navigate('Async', {});
            console.log('==Async==tested==');
          }}>
          <Text>Async Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
