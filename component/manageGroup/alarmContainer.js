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
    console.log('미완료에요');
    return (
        <View style={styles.incompleteContainer}>
            {/* 실제 시간 계산 */}
            <View><Text style={styles.incompleteText}>미완료</Text></View>
        </View>
    );
};

const Delayed = ({time, owner, setContainerState}) => {
    return (
        <View>
            {owner ? <DelayedOwner time={time} setContainerState={setContainerState} /> : <DelayedNotOwner time={time} /> }
        </View>
    );
};

const DelayedNotOwner = ({time}) => {
    return (
        <View style={styles.delayedPlanContainer}>
            <View><Text style={styles.delayedNotOwnerText}>계획 진행중</Text></View>
        </View>
    );
};

const DelayedOwner = ({time, setContainerState}) => {
    return (
        <View style={styles.delayedPlanContainer}>
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {setContainerState('완료')}}>
                    <View style={styles.delayedPlanBtn}><Text style={styles.delayedPlanBtnText}>완료 하기</Text></View>
                </TouchableOpacity>
            </View>
            <View><Text style={styles.delayedPlanText}>계획 진행중</Text></View>
        </View>
    );
};

const CompletePlan = ({setContainerState}) => {
    return (
        <View style={styles.delayedPlanContainer}>
            <View><Text style={styles.completeText}>완료</Text></View>
        </View>
    );
};


export default function AlarmContainer( {alarmName, alarmTime, alarmState, owner} ) {
    const [containerState, setContainerState] = useState(alarmState);

    return (
        <View style={styles.alarmTopContainer}>
            <View style={styles.alarmContainer}>
                <View style={styles.alarmTextView}>
                    <View><Text style={styles.alarmNameText}>{alarmName}</Text></View>
                    <View><Text style={styles.alarmTimeText}>{alarmTime}</Text></View>
                </View>
                <View>
                    {containerState === '미완료' ? <IncompletePlan time={alarmTime} /> : containerState === '계획 진행중' ?
                     <Delayed time={alarmTime} owner={owner} setContainerState={setContainerState} /> :
                     containerState === '완료' ? <CompletePlan setContainerState={setContainerState} /> : <></>}
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
        justifyContent:'center',
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
