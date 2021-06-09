import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

//Screens
import AppMenu from '../screens/AppMenu';
import Home from '../screens/Home';
import ReadNews from '../screens/ReadNews';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen
        name="Menu"
        component={AppMenu}
        options={{
          gestureDirection: 'vertical',
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }} />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          gestureDirection: "horizontal",
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} />
      <Stack.Screen 
        name="ReadNews" 
        component={ReadNews} 
        options={{
          gestureDirection: "horizontal",
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureDirection: "horizontal",
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes/>
    </NavigationContainer>
  );
};

export default AppContainer;