import React from 'react';
import {View, Text} from 'react-native';

class LifeyCycleTestScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('==constructor==tested==');

    this.state = {
      message: 'Hello Constructor',
    };
  }
  componentDidMount() {
    console.log('==componentDidMount==tested==');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({message: data.message}));
  }

  render() {
    console.log('==render==tested==' + this.state.message);
    return (
      <View>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}
export default LifeyCycleTestScreen;
