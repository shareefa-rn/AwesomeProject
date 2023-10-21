import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const DashBoardScreen = props => {
  const [name, setName] = useState('');

  const [version, setVersion] = useState('');

  const [vName, vVersion, vFeature] = useState('');
  const [nameList, setNameList] = useState([
    {vName: 'CupCake', vVersion: '1.5', vFeature: 'CupCake feature'},
    {vName: 'Donut', vVersion: '1.6', vFeature: 'Donut feature'},
  ]);

  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
      }}>
      <TouchableOpacity
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Android Versions History</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <FlatList
          data={nameList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                  height: 40,
                  backgroundColor: 'lightgreen',
                  marginVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginHorizontal: 10,
                    flex: 1,
                  }}
                  source={{
                    uri: 'https://media.timeout.com/images/106049585/image.jpg',
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details Screen', {
                      name: item.vName,
                      version: item.vVersion,
                      feature: item.vFeature,
                    });
                    console.log('lo==' + item.vName);
                  }}
                  style={{
                    height: 40,
                    flex: 1,
                    marginHorizontal: 10,
                    backgroundColor: 'lightgreen',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item.vName}</Text>
                </TouchableOpacity>
                <Text style={{flex: 1}}>{item.vVersion}</Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
        }}>
        <TextInput
          value={name}
          onChangeText={changedText => {
            setName(changedText);
          }}
          placeholder="Version Name"
          style={{
            justifyContent: 'center',
            backgroundColor: 'pink',
            height: 40,
            width: 100,
            margin: 10,
            padding: 5,
            flex: 1,
          }}
        />
        <TextInput
          value={version}
          onChangeText={changedText => {
            setVersion(changedText);
          }}
          placeholder="Version Number"
          style={{
            justifyContent: 'center',
            backgroundColor: 'pink',
            height: 40,
            width: 100,
            margin: 10,
            padding: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: 'pink',
            height: 40,
            margin: 10,
            padding: 5,
            flex: 1,
          }}
          onPress={() => {
            console.log('clicked version' + name + version);
            setNameList([
              ...nameList,
              {vName: name, vVersion: version, Feature: name + ' feature'},
            ]);
          }}>
          <Text>Add Version</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
