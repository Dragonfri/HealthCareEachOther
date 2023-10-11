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

export default function LoginPage({navigation}) {
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
        <View style={styles.BtnContainer}>
          <TouchableOpacity>
            <Text style={styles.IdFindBtn}>이메일 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.PwFindBtn}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.SignUpBtn}>회원가입 하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SignInBtn}>
        <TouchableOpacity>
          <Text style={styles.SignInBtnText}>로그인</Text>
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
    marginTop: '70%',
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
  BtnContainer: {
    marginTop: '20%',
    width: '100%',
    hegith: '10%',
    flexDirection: 'row',
  },
  IdFindBtn: {
    color: '#898585',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  PwFindBtn: {
    color: '#898585',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: '10%',
  },
  SignUpBtn: {
    color: '#3AD277',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: '40%',
  },
});
