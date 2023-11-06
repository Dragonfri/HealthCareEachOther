/* eslint-disable prettier/prettier */
import {React, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileImg from '../../assets/images/obama.jpg';

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

const MySelf = () => {
    return (
        <View style={styles.mySelfWrap}>
            <Text style={styles.mySelfText}>나</Text>
        </View>
    );
};

export default function ElementProfile({elementName, selected, self, selectedElement}) {
    return (
      <View style={styles.container}>
        <View style={selected === true ? styles.imageSelectedWrap : styles.imageWrap}>
          <Image
            style={styles.profileImg}
            source={ProfileImg}
          />
        </View>
        <View><Text style={selected === true ? styles.selectedElementName : styles.elementNameStyle}>{elementName}</Text></View>
        {self === selectedElement ? <MySelf /> : <></>}
     </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
  },
  elementNameStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedElementName: {
    color: '#3AD277',
    fontSize: 14,
    fontWeight: '500',
  },
  imageWrap: {
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageSelectedWrap: {
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AD277',
  },
  mySelfWrap: {
    width: 20,
    height: 20,
    backgroundColor: '#3AD277',
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: -1,
    top: -4,
  },
  mySelfText: {
    color: 'white',
    fontSize: 10,
  },
});