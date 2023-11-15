/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

export default function StartPage({navigation}) {

  const isFocused = useIsFocused();

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
    if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
            return;
        }
        seen.add(value);
    }
    return value;
    };
  };

  const userLogin = (userData) => {

    console.log("login hi");

    fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({'memberId': userData.userId, 'password': userData.userPw}, getCircularReplacer()),
      }).then((response) => response.json())
        .then((data) => {
            if (data.access_token) {
                console.log(data.access_token);
                navigation.navigate('Main', {'access_token': data.access_token, 'member_id': userData.userId});
            } else {
                alert('로그인 정보가 없습니다.');
            }
        })
        .catch((error) => {
            console.error("로그인 요청 중 오류 발생:", error);
        });
  };

  const fetchUserData = async () => {
    const userDataString =  await AsyncStorage.getItem('userData');
    const userData = JSON.parse(userDataString);

    if (userData === null) {
      return;
    }
    userLogin(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.loginTextContainer}>
          <View>
            <Text style={styles.loginText}>안녕하세요,</Text>
          </View>
          <View>
            <Text style={styles.loginText}>
              회원가입 또는 로그인을 해주세요.
            </Text>
          </View>
        </View>
        <View style={styles.container}>{/* 공백 */}</View>

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
          <View>{/* sns icon */}</View>
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
