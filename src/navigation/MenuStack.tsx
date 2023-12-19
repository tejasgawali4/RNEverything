/* eslint-disable react/react-in-jsx-scope */
import BottomTabNavigation from './BottomTabNavigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function MenuStack(Stack: any): React.JSX.Element {
  return (
    <>
      <Stack.Screen
        name={'Dashboard'}
        component={BottomTabNavigation}
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
