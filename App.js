/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StartPage from "./component/loginComponent/startPage";
import RegisterPage from './component/loginComponent/registerPage';
import Main from './component/main/main';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './component/loginComponent/loginPage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Start" component={StartPage} />
    //     <Stack.Screen name="Register" component={RegisterPage} />
    //     <Stack.Screen name="Login" component={LoginPage} />
    //     <Stack.Screen name="Main" component={Main} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Main />
  );
}

export default App;
