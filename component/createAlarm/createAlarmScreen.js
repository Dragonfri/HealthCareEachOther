/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ClockImage = require('../../assets/images/clock.png');
const RetryImage = require('../../assets/images/retry.png');
const MikeImage = require('../../assets/images/mike.png');
const PlayImage = require('../../assets/images/play.png');

import TimeModal from './timeModal';

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
  // 모달의 활성화 상태를 관리하는 state
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 선택된 요일과 시간을 저장하는 state
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  // TimeModal에서 설정을 완료하고 전달된 정보를 받을 콜백 함수
  const handleTimeSelection = (days, time) => {
    setSelectedDays(days);
    setSelectedTime(time);
    setIsModalVisible(false); // 모달 비활성화
  };

  // selectedDays와 selectedTime이 둘 다 있을 때만 SelectedDateTime을 표시하는 함수
  const renderSelectedDateTime = () => {
    if (selectedDays.length > 0 && selectedTime) {
      return (
        <View style={styles.SelectedDateTimeView}>
          <Text style={styles.SelectedDateTime}>
            선택된 요일: {selectedDays.join(', ')}
          </Text>
          <Text style={styles.SelectedDateTime}>
            선택된 시간: {selectedTime}
          </Text>
        </View>
      );
    }
    return null; // 둘 중 하나라도 없으면 아무것도 표시하지 않음
  };

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
          contentContainerStyle={styles.AlarmScrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.PlanText}>계획명을 입력해주세요</Text>
          <TextInput
            style={styles.PlanTextInput}
            placeholder="상대에게 보여줄 알람의 이름"
            placeholderTextColor="gray"
          />
          <Text style={styles.PlanText}>계획 시간을 설정해주세요</Text>
          <View style={styles.OtherInputContainer}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={styles.DateTimeRow}>
              <Image source={ClockImage} style={styles.Image} />
              {renderSelectedDateTime()}
            </TouchableOpacity>
          </View>

          <Text style={styles.PlanText}>
            당신의 목소리로 알람음을 설정해주세요.
          </Text>
          <View style={styles.LastInputContainer}>
            <TouchableOpacity style={styles.VoiceRow} onPress={() => {}}>
              <Image source={MikeImage} style={styles.Image} />
              <Text style={styles.recordText}>녹음 시작/중지</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.VoiceRow} onPress={() => {}}>
              <Image source={PlayImage} style={styles.Image} />
              <Text style={styles.recordText}>녹음 재생</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.SubmitContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.SubmitBtn}>
          <Text style={styles.btnText}>설정하기</Text>
        </TouchableOpacity>
      </View>
      <TimeModal
        onSubmit={handleTimeSelection}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
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
    // backgroundColor: 'black',
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
    height: '6%',
    // backgroundColor: 'aqua',
    // marginBottom: '50%',
    marginTop: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row', // 가로 방향으로 아이템을 배열한다
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Image: {
    width: 30,
    height: 30,
    marginBottom: '3%',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  SelectedDateTimeView: {
    marginBottom: '5%',
    marginLeft: '5%',
  },
  SelectedDateTime: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  DateTimeRow: {
    // 새로운 스타일
    flexDirection: 'row', // 가로 방향으로 아이템을 배열한다
    alignItems: 'center', // 세로 방향으로 중앙에 위치
  },
  recordText: {
    marginLeft: '5%',
    color: 'black',
  },
  VoiceRow: {
    alignSelf: 'flex-start',
    flexDirection: 'row', // 가로 방향으로 아이템을 배열한다
    alignItems: 'center', // 세로 방향으로 중앙에 위치
  },
});
