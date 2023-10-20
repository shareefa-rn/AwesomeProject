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
    {vName: 'CupCake'},
    {vName: 'Donut'},
  ]);
  const [versionList, setVersionList] = useState([
    {vVersion: '1.5'},
    {vVersion: '1.6'},
  ]);
  const [featureList, setFeatureList] = useState([
    {vFeature: 'CupCake feature'},
    {vFeature: 'Donut feature'},
  ]);

  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
      }}>
      <View style={{justifyContent: 'center'}}>
        <Text>Android Version History</Text>
        <FlatList
          data={nameList}
          renderItem={({item}) => {
            return (
              <View
                style={{
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
                  }}
                  source={{
                    uri: 'https://media.timeout.com/images/106049585/image.jpg',
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item.vName}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Settings', {
                      city,
                      country,
                    });
                  }}
                  style={{
                    height: 40,
                    marginHorizontal: 10,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 100,
                  }}>
                  <Text>Goto Settings</Text>
                </TouchableOpacity>
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
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: 'pink',
            height: 40,
            margin: 10,
            padding: 5,
          }}
          onPress={() => {
            console.log('clicked version' + name + version);
            setNameList([...nameList, {vName: name}]);
            setVersionList([...versionList, {vVersion: version}]);
            setFeatureList([...featureList, {vFeature: version + ' feature'}]);
          }}>
          <Text>Add Version</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
