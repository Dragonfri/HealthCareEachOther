/* eslint-disable prettier/prettier */
import {React, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from '../../assets/images/byVoiceLogo.png';

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

export default function Main() {
    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <View><Text>s</Text></View>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoStyle}
                        source={Logo}
                    />
                </View>
                <View>
                    
                </View>
            </View>
            <View style={styles.second} />
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    second: {
        flex: 10,
        width: '100%',
        backgroundColor: 'blue',
    },
    logoContainer: {
        // margin: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '5%',
    },

    logoStyle: {
        width: 50,
        height: 50,
    },
  
});
