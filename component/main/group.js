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

export default function Group({groupName, groupElement, groupCode}) {
    return (
        <View style={styles.groupTopContainer}>
            <View style={styles.groupContainer}>
                <View><Image source={ProfileImg} style={styles.groupImg} /></View>
                <View style={styles.groupTextView}>
                    <View><Text style={styles.groupName}>{groupName}</Text></View>
                    <View><Text style={styles.groupElement}>{`구성원: ${groupElement}`}</Text></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    groupTopContainer: {
        width: 360,
        height: 115,
        backgroundColor: 'white',
        marginBottom: '8%',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 4,
    },
    groupImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 15,
    },
    groupContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    groupTextView: {
        marginLeft: 20,
        padding: 5,
    },
    groupName: {
        color: 'black',
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 7,
        marginLeft: 11,
    },
    groupElement: {
        color: '#94AA9D',
        opacity: 0.71,
        fontSize: 11,
    },
});