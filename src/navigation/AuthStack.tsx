/* eslint-disable react/react-in-jsx-scope */
import {Login, Register} from '../screens';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function AuthStack(Stack: any) {
  return (
    <>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerTintColor: Colors.black,
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          // title: constantsStings.Navigations.DASHBOARD,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerTintColor: Colors.black,
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          // title: constantsStings.Navigations.DASHBOARD,
          headerShown: false,
        }}
      />
    </>
  );
}
