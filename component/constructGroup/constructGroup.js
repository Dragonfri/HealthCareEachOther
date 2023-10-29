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
import FirstConstructPage from './firstConstructPage';
import SecondConstructPage from './secondConstructPage';

const Tab = createNativeStackNavigator();

export default function ConstructGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='FirstConstructPage' component={FirstConstructPage} />
            <Tab.Screen name='SecondConstructPage' component={SecondConstructPage} />
        </Tab.Navigator>
    );
}