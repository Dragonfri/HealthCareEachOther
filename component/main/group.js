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

export default function Group() {
    return (
        <View style={styles.groupTopContainer}>
            <View style={styles.groupContainer}>
                <View styles={styles.groupImgContainer}><Image source={ProfileImg} style={styles.groupImg} /></View>
                <View>
                    <Text>dfdfd</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    groupTopContainer: {
        width: 320,
        height: 100,
        backgroundColor: 'blue',
        marginTop: '13%',
        marginBottom: '5%',
    },
    groupImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    groupContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});