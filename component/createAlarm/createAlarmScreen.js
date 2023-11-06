/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ClockImage = require('../../assets/images/clock.png');
const RetryImage = require('../../assets/images/retry.png');
const MikeImage = require('../../assets/images/mike.png');

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

export default function CreateAlarmScreen() {
  return (
    <View style={styles.TopContainer}>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>구성원 계획 설정</Text>
      </View>
      <View style={styles.AlarmCreateContainer}>
        <Text style={styles.InfoText}>
          계획 시간 및 기타 옵션을 선택하세요.
        </Text>
        <ScrollView
          style={{width: '80%'}}
          contentContainerStyle={styles.AlarmScrollContainer}>
          <Text style={styles.PlanText}>계획명을 입력해주세요</Text>
          <TextInput
            style={styles.PlanTextInput}
            placeholder="상대에게 보여줄 알람의 이름"
            placeholderTextColor="gray"
          />
          <Text style={styles.PlanText}>계획 시간을 설정해주세요</Text>
          <View style={styles.OtherInputContainer}>
            <TouchableOpacity>
              <Image source={ClockImage} style={styles.Image} />
            </TouchableOpacity>
          </View>
          <Text style={styles.PlanText}>계획 이행 시간을 설정해주세요</Text>
          <View style={styles.OtherInputContainer}>
            <TouchableOpacity>
              <Image source={ClockImage} style={styles.Image} />
            </TouchableOpacity>
          </View>
          <Text style={styles.PlanText}>알람 반복 횟수를 설정해주세요</Text>
          <View style={styles.OtherInputContainer}>
            <TouchableOpacity>
              <Image source={RetryImage} style={styles.Image} />
            </TouchableOpacity>
          </View>
          <Text style={styles.PlanText}>
            당신의 목소리로 알람음을 설정해주세요.
          </Text>
          <View style={styles.LastInputContainer}>
            <TouchableOpacity>
              <Image source={MikeImage} style={styles.Image} />
              <Text></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.SubmitContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.SubmitBtn}>
          <Text style={styles.btnText}>설정하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    // backgroundColor: 'tomato',
    width: '100%',
    height: '100%',
  },
  Title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  TitleText: {color: 'black', fontSize: 24, fontWeight: '600'},
  AlarmCreateContainer: {
    flex: 6,
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'green',
  },
  InfoText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '5%',
  },
  AlarmScrollContainer: {
    flexGrow: 1,
    // backgroundColor: 'yellow',
  },
  PlanText: {
    marginTop: '15%',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  PlanTextInput: {
    width: '100%',
    // height: '18%',
    marginTop: '5%',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  SubmitContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  SubmitBtn: {
    width: '80%',
    height: '50%',
    borderRadius: 20,
    backgroundColor: '#3AD277',
    alignItems: 'center',
    justifyContent: 'center',
  },

  OtherInputContainer: {
    width: '100%',
    height: '5%',
    marginTop: '10%',
    // backgroundColor: 'aqua',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'center',
  },
  LastInputContainer: {
    width: '100%',
    height: '5%',
    // backgroundColor: 'aqua',
    marginBottom: '50%',
    marginTop: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'center',
  },
  Image: {
    width: 30,
    height: 30,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
