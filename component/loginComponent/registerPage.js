/* eslint-disable prettier/prettier */
import React from 'react';
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
} from 'react-native';

export default function RegisterPage() {
  return (
    <View style={styles.TopContainer}>
      <View style={styles.LoginPwContainer}>
        <Text style={styles.LoginText}>이메일</Text>
        <TextInput
          style={styles.LoginInput}
          placeholder="이메일 입력"
          placeholderTextColor="gray"
        />
        <Text style={styles.PwText}>비밀번호</Text>
        <TextInput
          style={styles.PwInput}
          placeholder="비밀번호 입력"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.SignInBtn}>
        <TouchableOpacity>
          <Text style={styles.SignInBtnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  LoginPwContainer: {
    marginTop: '10%',
    width: '85%', // 일단 % 단위로 스타일링 했음. 나중에 flex 단위가 필요하면 바꿀게
    height: '40%',
    // borderWidth: 2,
    // borderColor: 'black',
    flexDirection: 'column',
  },
  SignInBtn: {
    marginTop: '60%',
    width: '85%',
    height: '7%',
    borderRadius: 15,
    backgroundColor: '#3AD277',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInBtnText: {
    color: 'white',
    fontWeight: '600',
  },
  LoginText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    letterSpacing: -1,
  },
  LoginInput: {
    width: '100%',
    height: '18%',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  PwText: {
    marginTop: '10%',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    letterSpacing: -1,
  },
  PwInput: {
    width: '100%',
    height: '18%',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
