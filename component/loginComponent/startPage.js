/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

export default function StartPage( { navigation } ) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.loginTextContainer}>
                    <View><Text style={styles.loginText}>안녕하세요,</Text></View>
                    <View><Text style={styles.loginText}>회원가입 또는 로그인을 해주세요.</Text></View>
                </View>
                <View style={styles.container}>
                    {/* 공백 */}
                </View>

                <View style={styles.buttonContainer}>
                    <View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.buttonText}>회원가입</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                 <Text style={styles.buttonText}>로그인으로 시작하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container} />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.snsLoginText}>SNS 계정으로 로그인하기.</Text>
                    </View>
                    <View>
                        {/* sns icon */}
                    </View>
                </View>
                <View style={styles.container} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mainContainer: {
        flex: 1.2,
        flexDirection: 'column',
    },
    loginTextContainer: {
        flex: 1.1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 50,
        marginLeft: 40,
    },
    buttonContainer: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
    },
    snsLoginText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginLeft: 40,
    },
    button: {
        width: 330,
        backgroundColor: '#3AD277',
        padding: 15,
        borderRadius: 16,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
