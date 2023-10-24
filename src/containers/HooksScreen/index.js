import {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import ChildComponent from './myChildComponent';

const HooksScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('use effect with empty dependency array');
    // we can call api fucntionality/databases/==> this method is for best to call side effects
  }, []); //only be called at once at the load time // componentdimount

  console.log('render called ');

  return (
    <View>
      <Text>Test</Text>
      <TextInput
        value={firstName}
        onChangeText={ct => {
          setFirstName(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TextInput
        value={lastName}
        onChangeText={ct => {
          setLastName(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <Text></Text>
      <ChildComponent firstName={firstName} lastName={lastName} />
    </View>
  );
};

export default HooksScreen;
