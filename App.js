/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StartPage from './component/loginComponent/startPage';
import RegisterPage from './component/loginComponent/registerPage';
import Main from './component/main/main';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './component/loginComponent/loginPage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableOpacity,
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
import CreateAlarmScreen from './component/createAlarm/createAlarmScreen';
import AlarmEdit from './component/alramEdit/alarmEdit';

import DownArrow from './assets/images/back.png';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ConnectScreen"
          component={ConnectScreen}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ManageGroup"
          component={ManageGroup}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
          initialParams={null}
        />
        <Stack.Screen
          name="CreateAlarm"
          component={CreateAlarmScreen}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="AlarmEdit"
          component={AlarmEdit}
          options={({navigation}) => ({
            header: () => (
              <View>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={DownArrow}
                    style={{
                      position: 'absolute',
                      left: 30,
                      top: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
