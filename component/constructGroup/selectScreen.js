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

export default function SelectScreen({navigation}) {
    return (
        <View>
            <View style={styles.header}><Text style={styles.headerText}>그룹 생성 및 참여</Text></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('constructGroup')}>
                    <View style={styles.buttonWrap}>
                        <View><Text style={styles.buttonText}>그룹 생성</Text></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('participateGroup')}>
                    <View style={styles.buttonWrap}>
                        <View><Text style={styles.buttonText}>그룹 참여</Text></View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 120,
    },
    headerText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 150,
    },
    buttonWrap: {
        margin: 20,
        width: 140,
        height: 160,
        backgroundColor: '#DFF9F0',
        borderRadius: 16,
        justifyContent: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#3AD277',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});