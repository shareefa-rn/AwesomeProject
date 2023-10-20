import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const [myTextInput, setMyTextInput] = useState('');

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
      <TextInput
          value={myTextInput}
          onChangeText={changedText => {
            setMyTextInput(changedText);
          }}
          style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  textInput:{
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'white'
}
});

export default TouchableHighlightExample;