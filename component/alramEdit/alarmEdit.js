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

export default function AlarmEdit() {
  return (
    <View style={styles.TopContainer}>
      <Text>알람 수정</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {},
});
