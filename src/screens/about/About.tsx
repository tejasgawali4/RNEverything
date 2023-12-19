import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';

export class About extends PureComponent {
  render() {
    return (
      <View>
        <Text>About</Text>
        <Text>Version 1.0.0</Text>
      </View>
    );
  }
}

export default About;
