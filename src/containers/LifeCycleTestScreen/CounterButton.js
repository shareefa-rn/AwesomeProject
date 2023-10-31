import React from 'react';
import {View, Text, Button} from 'react-native';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  //pure component will do the same comparison like below method pure compoenent do shallow comparison
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        <Button
          title="Press me"
          color={this.props.color}
          onPress={() => this.setState(state => ({count: state.count + 1}))}
        />
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}

export default CounterButton;
