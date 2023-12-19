import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuStack from './MenuStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {AuthStack(Stack)} */}
        {false ? MenuStack(Stack) : AuthStack(Stack)}
        {/* {MenuStack(Stack)} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
