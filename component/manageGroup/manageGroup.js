/* eslint-disable prettier/prettier */
import {React, useState, useEffect} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
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
    ToastAndroid,
  } from 'react-native';
import Profile from '../main/profile';
import ElementProfile from './elementProfile';
import AlarmContainer from './alarmContainer';

export default function ManageGroup() {
    // 날짜 별로 가지고 온 계획 목록들
    const plans = [{name: '구성원: 오바마', plan: [{alarmName: '밥 잘 챙겨먹기', alarmTime: '06:00', alarmState: '계획 진행중'}]},
                   {name: '트럼프', plan: [{alarmName: '고혈압 약 먹기', alarmTime: '07:30', alarmState: '계획 진행중'}, {alarmName: '혈압 재기', alarmTime: '08:00', alarmState: '미완료'}]},
                   {name: '바이든', plan: [{alarmName: '고혈압 약 먹기', alarmTime: '09:00', alarmState: '미완료'}]},
                   {name: '힐러리', plan: [{alarmName: '비타민 먹기', alarmTime: '12:00', alarmState: '완료'}, {alarmName: '마그네슘 먹기', alarmTime: '13:30', alarmState: '사진 추가'}]},
                   {name: '문재인', plan: []},
                   {name: '윤석열...', plan: []},
    ];

    const route = useRoute();
    const groupInfo = route.params.groupInfo;
    // 사용자 자기 자신
    const self = route.params.self;
    // 그룹원 이름 리스트
    const groupElement = groupInfo.groupElement.split(',');
    const [selected, setSelected] = useState(route.params.self);
    // 현재 리스트뷰에 보여줄 alarm list
    const [alarms, setAlarms] = useState([]);

    const getInviteCode = () => {
      // to-do fetch 그룹 코드 & 클립보드 복사
      ToastAndroid.show('초대 코드가 클립보드에 복사되었습니다.', ToastAndroid.SHORT);
    };

    const onPressElement = (element) => {
      setAlarms([]);
      setSelected(element);
    };

    useEffect(() => {
      plans.forEach(member => {
        if (member.name === selected) {
          setAlarms(member.plan);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
      <View style={styles.container}>
        <View style={styles.space} />
        <View style={styles.header}>
          <View style={styles.titleWrap}><Text style={styles.titleText}>{groupInfo.groupName}</Text></View>
          <TouchableOpacity onPress={() => getInviteCode()}><View style={styles.copyCodeWrap}><Text>초대 코드 복사</Text></View></TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollStyle}>
            {groupElement.map((element, index) => (
              <TouchableOpacity key={index} onPress={() => onPressElement(element)} activeOpacity={0.8}>
                <View style={styles.elementStyle}>
                  <ElementProfile elementName={element} selected={selected === element} self={self} selectedElement={element} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.calendar}><Text>calendar</Text></View>
        <View style={styles.scrollView}>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {alarms.map((alarm, index) => (
              <TouchableOpacity key={index} onPress={() => {}} activeOpacity={0.8}>
                <View style={styles.planContainer}>
                  <AlarmContainer alarmName={alarm.alarmName} alarmTime={alarm.alarmTime} alarmState={alarm.alarmState} owner={self === selected} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.addGroupBtn}>
          <TouchableOpacity onPress={() => {}}>
              <Text style={styles.btnText}>알람 추가</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: 'green',
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
});