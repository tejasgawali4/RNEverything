import {Button, Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import WrapperContainer from '../../components/WrapperContainer';

export class Login extends PureComponent {
  validateUser() {
    console.log('Login....');
    // this.props.navigation.navigate('Home');
  }

  registerUser() {
    console.log('Register....');
  }

  render() {
    return (
      <WrapperContainer isLoading={false} wrapperStyles={{}}>
        <View style={{padding: 100}}>
          <Text>Login</Text>
          <Button onPress={() => this.validateUser()} title="Login" />
          <Button onPress={() => this.registerUser()} title="Register" />
        </View>
      </WrapperContainer>
    );
  }
}

export default Login;
