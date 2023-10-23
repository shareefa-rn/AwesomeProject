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
import styles from './styles';

const DashBoardScreen = props => {
  const [name, setName] = useState('');

  const [version, setVersion] = useState('');

  const [feature, setFeature] = useState('');

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
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity style={styles.touchableText}>
          <Text>Android Versions History</Text>
        </TouchableOpacity>
        <FlatList
          data={nameList}
          style={{marginBottom: 0}}
          renderItem={({item}) => {
            return (
              <View style={styles.view}>
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

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details Screen', {
                      name: item.vName,
                      version: item.vVersion,
                      feature: item.vFeature,
                    });
                    console.log('==Item==' + item.vName);
                  }}
                  style={styles.textview}>
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
          style={styles.textInuput}
        />
        <TextInput
          value={version}
          onChangeText={changedText => {
            setVersion(changedText);
          }}
          placeholder="Version Number"
          style={styles.textInuput}
        />
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            console.log('clicked version' + name + version);
            setFeature(name + ' feature');
            setNameList([
              ...nameList,
              {vName: name, vVersion: version, vFeature: name + ' feature'},
            ]);
            setName('');
            setVersion('');
            setFeature('');
          }}>
          <Text>Add Version</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
