import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuStack from './MenuStack';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {AuthStack(Stack)}
            {MenuStack(Stack)} */}
        {/* {isLogin ? MenuStack(Stack) : AuthStack(Stack)} */}
        {MenuStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
