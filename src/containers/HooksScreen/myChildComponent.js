import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const myChildComponent = props => {
  const [firstName, setFirstName] = useState(props.firstName); // here props.firstname value has only initial value
  const [lastName, setLastName] = useState(props.lastName);

  useEffect(() => {
    //when ever props are changing this useeffect will get render/call it again
    //remember that if props are not changing use effect wont be render.
    if (props.firstName !== firstName) {
      setFirstName(props.firstName);
    }
    if (props.lastName !== lastName) {
      setLastName(props.lastName);
    }
  }, [props.firstName, props.lastName]);
  console.log('child comp render' + firstName);
  return (
    <View>
      <Text>FirstName: {firstName}</Text>
      <Text>LastName: {lastName}</Text>
    </View>
  );
};

export default myChildComponent;
