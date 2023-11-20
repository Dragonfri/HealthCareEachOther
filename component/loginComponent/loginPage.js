/* eslint-disable prettier/prettier */
import {React, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

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

  const saveUserData = async (_id, pw, token) => {
    await AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        'token': token,
        'userId': _id,
        'userPw': pw,
      })
    );

    const userDataString = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    console.log(userData);
  };

  const loginAuth = () => {
    if (id === '' || password === '') {
      setIsEmpty(true);
      return;
    }

    // ip address hiding
    fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({'memberId': id, 'password': password}, getCircularReplacer()),
      }).then((response) => response.json())
        .then((data) => {
            if (data.access_token) {
                saveUserData(id, password, data.access_token);
                navigation.navigate('Main', {'access_token': data.access_token, 'member_id': id});
            } else {
                alert('로그인 정보가 없습니다.');
            }
        })
        .catch((error) => {
            console.error("로그인 요청 중 오류 발생:", error);
        });
  };

  return (
    <View style={styles.TopContainer}>
      <View style={styles.LoginPwContainer}>
        <Text style={styles.LoginText}>이메일</Text>
        <TextInput
          style={styles.LoginInput}
          placeholder="이메일 입력"
          placeholderTextColor="gray"
          value={id}
          onChangeText={setId}
        />
        <Text style={styles.PwText}>비밀번호</Text>
        <TextInput
          style={styles.PwInput}
          placeholder="비밀번호 입력"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
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
      <View>{isEmpty ? <Text style={styles.errorText}>id, password 모두 입력해주세요.</Text> : <></>}</View>
      <View style={styles.SignInBtn}>
        <TouchableOpacity onPress={loginAuth}>
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
    marginTop: '80%',
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
  errorText: {
    color: 'red',
    fontSize: 15,
    fontWeight: '600',
  },
});
