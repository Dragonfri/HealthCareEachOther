/* eslint-disable prettier/prettier */
import {React, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from '../../assets/images/byVoiceLogo.png';
import ProfileImg from '../../assets/images/obama.jpg';

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
import Profile from './profile';
import Group from './group';

export default function Main() {
    const doSomething = () => {
        
    };

    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <View style={{ width: 70 }}/>
                <View style={styles.logoContainer}>
                    <Image
                        // image source는 나중에 꼭 변환!
                        style={styles.logoStyle}
                        source={Logo}
                    />
                </View>
                <View style={styles.profileContainer}>
                    <Profile />
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    <Group groupImage={ProfileImg} groupName={'오바마 가족 방'} groupElement={'구성원: 오바마, 트럼프, 바이든, 힐러리, 문재인, 윤석열...'} />
                    <Group groupImage={ProfileImg} groupName={'오바마 가족 방'} groupElement={'구성원: 오바마, 트럼프, 바이든, 힐러리, 문재인, 윤석열...'} />
                    <Group groupImage={ProfileImg} groupName={'오바마 가족 방'} groupElement={'구성원: 오바마, 트럼프, 바이든, 힐러리, 문재인, 윤석열...'} />
                    <Group groupImage={ProfileImg} groupName={'오바마 가족 방'} groupElement={'구성원: 오바마, 트럼프, 바이든, 힐러리, 문재인, 윤석열...'} />
                    <Group groupImage={ProfileImg} groupName={'오바마 가족 방'} groupElement={'구성원: 오바마, 트럼프, 바이든, 힐러리, 문재인, 윤석열...'} />
                </ScrollView>
            </View>

            <View style={styles.addGroupBtn}>
                <TouchableOpacity onPress={doSomething}>
                    <Text style={styles.btnText}>그룹 추가</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    body: {
        flex: 10,
        width: '100%',
        paddingTop: 32,
        backgroundColor: '#fafafa',
        position: 'relative',
    },
    logoContainer: {
        // margin: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '5%',
    },
    logoStyle: {
        width: 50,
        height: 50,
    },
    profileContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '3%',
    },
    addGroupBtn: {
        width: '36%',
        height: '6.5%',
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
    scrollStyle: {
        flexGrow: 1,
        alignItems: 'center',
    },
});
