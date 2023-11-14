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
import messaging from '@react-native-firebase/messaging';

import {
  Alert,
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
import CreateAlarmScreen from './component/createAlarm/createAlarmScreen';
const Stack = createNativeStackNavigator();

function App() {
  // Background, Quit 상태일 경우
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    //  여기에 로직을 작성한다.
    console.log('Message handled in the background!', remoteMessage);
    //  remoteMessage.data로 메세지에 접근가능
    //  remoteMessage.from 으로 topic name 또는 message identifier
    //  remoteMessage.messageId 는 메시지 고유값 id
    //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
    //  remoteMessage.sentTime 보낸시간
  });

  // Foreground 상태인 경우
  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    checkToken();
    return unsubscribe;
  });

  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
    }
  }

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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConnectScreen"
          component={ConnectScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageGroup"
          component={ManageGroup}
          options={{headerShown: false}}
          initialParams={null}
        />
        <Stack.Screen
          name="CreateAlarm"
          component={CreateAlarmScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
