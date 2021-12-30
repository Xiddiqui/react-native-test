import App from './appStack';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
const AppNavigation = () => {
  return ( 
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'App'} component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;