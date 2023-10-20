/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { StyleSheet,
  View,
  Text, 
  ScrollView, 
  TextInput, 
  Image, 
  Button, 
  Alert, 
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Switch,
  SafeAreaView} from 'react-native';

import TouchableHighlightExample from './src/components/TouchableHighlightExample';
import MyTestComponent from './src/components/MyTestComponent';
import UserProfile from './src/components/UserProfile';


function App(){
  return (
    <SafeAreaView>
     <View> 
      <ScrollView>   
<MyTestComponent/>
   <Image
    style={{width:200, height: 200, marginVertical:20}}
    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/600px-F-35A_flight_%28cropped%29.jpg'
  }}
  />

<Image
    style={{width:200, height: 200, marginVertical:20}}
    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/600px-F-35A_flight_%28cropped%29.jpg'
  }}
  />

  <Button
  title={'Submit'}
  onPress={() => {
    Alert.alert('Success', 'Form Submitted', 'Ok');
  }}/>

  <TouchableOpacity
  activeOpacity={0.2}
  style={{marginHorizontal:10, height: 300}}>
    <View>
      <Text>i am TouchableOpacity image</Text>
      <Image
      style={{width:200, height:200, marginVertical: 20}}
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/600px-F-35A_flight_%28cropped%29.jpg'
      }}/>
    </View>
  </TouchableOpacity>
<TouchableHighlightExample/>
<ActivityIndicator size="large" color="#00ff00"/>
<Button title="Press me"
onPress={() => Alert.alert('Pressed')}/>

</ScrollView>
</View>
</SafeAreaView>);
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

export default App;
