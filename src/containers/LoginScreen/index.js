import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>

      <View>
        <Text style={styles.text}>User Name</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={ct => setUserName(ct)}></TextInput>
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={ct => setPassword(ct)}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          PersistanceHelper.setObject('login', {userName, password});

          EventRegister.emit('loginEvent');
          setUserName('');
          setPassword('');
          //  Alert.alert(`User ${userName} is log in with password ${password}`);
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 10,
    padding: 10,
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#015169',
    paddingVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderColor: '#bee6fe',
    backgroundColor: '#eaf7fd',
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default LoginScreen;
