/* eslint-disable prettier/prettier */
import {React, useState, useEffect} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
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
    ToastAndroid,
  } from 'react-native';

const Incomplete = (time) => {
    return (
        <View style={styles.incompleteContainer}>
            {/* 실제 시간 계산 */}
            <View><Text style={styles.imcompleteRestTime}>1분뒤 시작</Text></View>
            <View><Text style={styles.incompleteText}>미완료</Text></View>
        </View>
    );
};


export default function AlarmContainer( {alarmName, alarmTime, alarmState} ) {

    return (
        <View style={styles.alarmTopContainer}>
            <View style={styles.alarmContainer}>
                <View style={styles.alarmTextView}>
                    <View><Text style={styles.alarmNameText}>{alarmName}</Text></View>
                    <View><Text style={styles.alarmTimeText}>{alarmTime}</Text></View>
                </View>
                <View>
                    <Incomplete time={alarmTime} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alarmTopContainer: {
        width: 330,
        height: 105,
        backgroundColor: 'white',
        marginBottom: '8%',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 4,
    },
    alarmContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    alarmTextView: {
        marginLeft: 20,
        padding: 5,
        justifyContent:'center',
    },
    alarmNameText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: -5,
    },
    alarmTimeText: {
        color: 'black',
        fontSize: 36,
        fontWeight: '700',
    },
    incompleteContainer: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imcompleteRestTime: {
        color: '#C40303',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'right',
        marginLeft: 30,
    },
    incompleteText: {
        color: '#DFF9F0',
        fontSize: 34,
        fontWeight: '700',
        marginRight: 30,
        marginBottom: 10,
    },
});