/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
import SelectScreen from './selectScreen';
import ConstructGroup from './constructGroup';
import ParticipateGroup from './paticipateGroup';

const Tab = createNativeStackNavigator();

export default function ConnectScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SelectScreen" component={SelectScreen} options={{ headerShown: false }} />
            <Tab.Screen name="constructGroup" component={ConstructGroup} options={{ headerShown: false }} />
            <Tab.Screen name="participateGroup" component={ParticipateGroup} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
