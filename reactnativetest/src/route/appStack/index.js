/** @format */

import {
   Posts
  } from '../../screens';  
  import React from 'react';
  import {createStackNavigator} from '@react-navigation/stack';
  
  const AppStack = createStackNavigator();
  const App = () => {
    return (
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Posts'}>
        <AppStack.Screen name={'Posts'} component={Posts} />
      </AppStack.Navigator>
    );
  };
  
  export default App;
  