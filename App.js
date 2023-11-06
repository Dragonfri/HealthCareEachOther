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
import Profile from './component/main/profile';
import ConstructGroup from './component/constructGroup/constructGroup';
import ConnectScreen from './component/constructGroup/connectScreen';
import ManageGroup from './component/manageGroup/manageGroup';
import AudioComponent from './component/manageGroup/audioComponent';



const Stack = createNativeStackNavigator();

function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
         <Stack.Screen name="AudioComponent" component={AudioComponent} options={{headerShown: false}} />
         <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false }} />
         <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
         <Stack.Screen name="ConnectScreen" component={ConnectScreen} options={{headerShown: false}} />
         <Stack.Screen name="ManageGroup" component={ManageGroup} options={{headerShown: false}} initialParams={null} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
