/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from 'react-native-config';

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
} from 'react-native';

export default function AlarmPage({navigation}) {
  return (
    <View>
      <Text style={styles.text}>안녕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
