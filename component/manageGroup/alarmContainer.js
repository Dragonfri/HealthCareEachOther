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

const IncompletePlan = ({time}) => {
  return (
    <View style={styles.incompleteContainer}>
      {/* 실제 시간 계산 */}
      <View>
        <Text style={styles.incompleteText}>미완료</Text>
      </View>
    </View>
  );
};

const Delayed = ({time, owner, setContainerState}) => {
  return (
    <View>
      {owner ? (
        <DelayedOwner time={time} setContainerState={setContainerState} />
      ) : (
        <DelayedNotOwner time={time} />
      )}
    </View>
  );
};

const DelayedNotOwner = ({time}) => {
  return (
    <View style={styles.delayedPlanContainer}>
      <View>
        <Text style={styles.delayedNotOwnerText}>계획 진행중</Text>
      </View>
    </View>
  );
};

const DelayedOwner = ({time, setContainerState}) => {
  return (
    <View style={styles.delayedPlanContainer}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setContainerState(true);
          }}>
          <View style={styles.delayedPlanBtn}>
            <Text style={styles.delayedPlanBtnText}>완료 하기</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.delayedPlanText}>계획 진행중</Text>
      </View>
    </View>
  );
};

const CompletePlan = ({setContainerState}) => {
  return (
    <View style={styles.delayedPlanContainer}>
      <View>
        <Text style={styles.completeText}>완료</Text>
      </View>
    </View>
  );
};

export default function AlarmContainer({
  alarmName,
  alarmTime,
  alarmState,
  alarmDate,
  owner,
}) {
  const [containerState, setContainerState] = useState(alarmState);


  const getCurrentDate = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 만듭니다.
    let currentDay = currentDate.getDate().toString().padStart(2, '0');

    let formattedDate = currentYear + '-' + currentMonth + '-' + currentDay;

    return formattedDate;
  };

  const isTime = () => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours().toString().padStart(2, '0');
    let currentMinute = currentDate.getMinutes().toString().padStart(2, '0');

    let currentTime = currentHour + ':' + currentMinute;

    return timeCompare(currentTime, alarmTime);
  };

  const timeCompare = (a, b) => {
    let t1 = a.replace(':', '');
    let t2 = b.replace(':', '');
    var timeA = parseInt(t1, 10);
    var timeB = parseInt(t2, 10);


    if (timeA < timeB) {
      return false;
    }
    if (timeA >= timeB) {
      return true;
    }
  };

  const determineState = (date1, date2) => {
    var timestamp1 = new Date(date1).getTime();
    var timestamp2 = new Date(date2).getTime();

    if (timestamp1 === timestamp2) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.alarmTopContainer}>
      <View style={styles.alarmContainer}>
        <View style={styles.alarmTextView}>
          <View>
            <Text style={styles.alarmNameText}>{alarmName}</Text>
          </View>
          <View>
            <Text style={styles.alarmTimeText}>{alarmTime}</Text>
          </View>
        </View>
        <View>
          {!determineState(getCurrentDate(), alarmDate.dateString) ?
            <IncompletePlan time={alarmTime} /> : !isTime() ? <IncompletePlan time={alarmTime} /> :
          alarmState ?
          <CompletePlan setContainerState={setContainerState} /> :
          containerState ?
          <CompletePlan setContainerState={setContainerState} /> :
          <Delayed
            time={alarmTime}
            owner={owner}
            setContainerState={setContainerState}
          />
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alarmTopContainer: {
    width: 330,
    height: 105,
    backgroundColor: 'white',
    marginBottom: '8%',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 4,
  },
  alarmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alarmTextView: {
    marginLeft: 20,
    padding: 5,
    justifyContent: 'center',
  },
  alarmNameText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: -5,
  },
  alarmTimeText: {
    color: 'black',
    fontSize: 36,
    fontWeight: '700',
  },
  incompleteContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  incompleteText: {
    color: '#DFF9F0',
    fontSize: 34,
    fontWeight: '700',
    marginRight: 30,
  },
  delayedPlanContainer: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  delayedPlanBtn: {
    width: 85,
    height: 35,
    backgroundColor: '#3AD277',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    marginRight: 30,
  },
  delayedPlanBtnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  delayedPlanText: {
    color: '#3AD277',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 30,
  },
  delayedNotOwnerText: {
    color: '#3AD277',
    fontSize: 24,
    fontWeight: '600',
    marginRight: 20,
  },
  completeText: {
    color: '#3AD277',
    fontSize: 28,
    fontWeight: '600',
    marginRight: 30,
  },
});
