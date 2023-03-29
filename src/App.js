/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SafeAreaView, StatusBar} from 'react-native';

import Causes from './Causes';
import Home from './home';
import {NavigationContainer} from '@react-navigation/native';
import Prevention from './Prevention';
import React from 'react';
import Specialist from './Specialist';
import Symptoms from './Sympotoms';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={{flex: 1, backgroundColor: theme.white}}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Causes" component={Causes} />
          <Stack.Screen name="Symptoms" component={Symptoms} />
          <Stack.Screen name="Prevention" component={Prevention} />
          <Stack.Screen name="Specialist" component={Specialist} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    // </GestureHandlerRootView>
  );
};

export default App;
