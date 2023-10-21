import React from 'react';
import {View, Text, TextInput} from 'react-native';

class MyTestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {bgcolor} = this.props;
    console.log(this.props);
    return (
      <View style={{backgroundColor: bgcolor}}>
        <Text>Hello World</Text>
        <TextInput
          onChangeText={changedText => {
            console.log(changedText);
          }}
          style={{backgroundColor: 'gray', height: 40}}
        />
      </View>
    );
  }
}

export default MyTestComponent;
