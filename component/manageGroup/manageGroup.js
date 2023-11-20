/* eslint-disable prettier/prettier */
import {React, useState, useEffect} from 'react';
import {NavigationContainer, useRoute, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clipboard from '@react-native-clipboard/clipboard';
import Config from 'react-native-config';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
  Modal,
} from 'react-native';
import Profile from '../main/profile';
import ElementProfile from './elementProfile';
import AlarmContainer from './alarmContainer';
import {Calendar} from 'react-native-calendars';
import DownArrow from '../../assets/images/down-arrow.png';

export default function ManageGroup({navigation}) {
  // 날짜 별로 가지고 온 계획 목록들
 
  const isFocused = useIsFocused();
  const today = new Date();
  const route = useRoute();
  const groupInfo = route.params.groupInfo;
  // 사용자 자기 자신
  const self = route.params.self;
  const [selected, setSelected] = useState(route.params.self);
  // 현재 리스트뷰에 보여줄 alarm list
  const [alarms, setAlarms] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState({
    dateString:
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate(),
    day: today.getDate(),
    month: today.getMonth() + 1,
    timestamp: 0,
    year: today.getFullYear(),
  });

  const onCopyGroupCode = async () => {
    try {
      Clipboard.setString(groupInfo.groupCode);
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('복사에 실패했습니다.');
    }
  };

  const getInviteCode = () => {
    // to-do fetch 그룹 코드 & 클립보드 복사
    onCopyGroupCode();
    ToastAndroid.show(
      '초대 코드가 클립보드에 복사되었습니다.',
      ToastAndroid.SHORT,
    );
  };

  const onPressElement = element => {
    if (element === selected) {
      return;
    }
    setSelected(element);
    setAlarms([]);
  };

  const cutSeconds = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      arr[i].time = arr[i].time.substr(0, 5);
    }

    arr.sort(compareTime);
    return arr;
  };

  const compareTime = (a, b) => {
    let t1 = a.time.replace(':', '');
    let t2 = b.time.replace(':', '');
    var timeA = parseInt(t1, 10);
    var timeB = parseInt(t2, 10);

    if (timeA < timeB) {
      return -1;
    }
    if (timeA > timeB) {
      return 1;
    }
    return 0;
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0(일요일)부터 6(토요일)까지의 값 반환
    return daysOfWeek[dayOfWeek];
  };

  const renewAlarms = async () => {
    const alarmInfo = {
      'day': getDayOfWeek(date.dateString),
      'groupId': groupInfo.groupCode,
      'memberId': selected,
    };

    try {
      const response = await fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/user/alarm/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alarmInfo),
      });
      let responseData = await response.json();
      responseData = cutSeconds(responseData);

      setAlarms(responseData);
    } catch (error) {
      console.error("알람 데이터 갱신 중 오류 발생:", error);
    }
  };
  useEffect(() => {
    renewAlarms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, isFocused, date]);

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <View style={styles.header}>
        <View style={styles.titleWrap}>
          <Text style={styles.titleText}>{groupInfo.groupName}</Text>
        </View>
        <TouchableOpacity onPress={() => getInviteCode()}>
          <View style={styles.copyCodeWrap}>
            <Text style={styles.inviteText}>초대 코드 복사</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slider}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollStyle}>
          {groupInfo.members.map((element, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressElement(element)}
              activeOpacity={0.8}>
              <View style={styles.elementStyle}>
                <ElementProfile
                  elementName={element}
                  selected={selected === element}
                  self={self}
                  element={element}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.calendar}>
        <TouchableOpacity
          onPress={() => setShowCalendar(true)}
          activeOpacity={0.8}>
          <View style={styles.calendarContainer}>
            <Text style={styles.calendarText}>{date.dateString}</Text>
            <View style={styles.downArrowContainer}>
              <Image source={DownArrow} style={styles.downArrow} />
            </View>
          </View>
        </TouchableOpacity>
        <Modal visible={showCalendar} animationType="fade" transparent={true}>
          <Calendar
            monthFormat={'yyyy MM'}
            style={styles.calendarStyle}
            onDayPress={date => {
              setDate(date);
              setShowCalendar(false);
            }}
          />
        </Modal>
      </View>
      <View style={styles.scrollView}>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          {alarms.map((alarm, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('AlarmEdit')}
              activeOpacity={0.8}>
              <View style={styles.planContainer}>
                <AlarmContainer
                  alarmId={alarm.alarmId}
                  alarmName={alarm.alarmName}
                  alarmTime={alarm.time}
                  alarmState={alarm.status}
                  alarmDate={date}
                  owner={self === selected}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.addGroupBtn}>

        <TouchableOpacity onPress={() => navigation.navigate('CreateAlarm', {groupInfo, selected})}>
          <Text style={styles.btnText}>알람 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  space: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  slider: {
    flex: 2,
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 9,
    backgroundColor: 'white',
  },
  titleWrap: {
    marginRight: 10,
    marginLeft: -30,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  },
  copyCodeWrap: {
    backgroundColor: '#3AD277',
    opacity: 0.7,
    padding: 5,
    borderRadius: 5,
  },
  elementStyle: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
  elementText: {
    color: 'black',
    fontSize: 14,
  },
  planContainer: {
    margin: 20,
  },
  calendarText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
  },
  calendarStyle: {
    borderRadius: 10,
    elevation: 2,
    margin: 40,
    marginTop: 170,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  downArrow: {
    width: 15,
    height: 15,
    margin: 5,
  },
  downArrowContainer: {
    justifyContent: 'flex-end',
  },
  addGroupBtn: {
    width: 150,
    height: 50,
    backgroundColor: '#DFF9F0',
    position: 'absolute',
    bottom: '7%',
    left: '32%',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 16,
    elevation: 4,
  },
  btnText: {
    textAlign: 'center',
    color: '#3AD277',
    fontSize: 18,
    fontWeight: '500',
  },
  inviteText: {
    color: 'white',
    fontWeight: '500',
  },
});
