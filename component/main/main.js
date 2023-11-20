/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {React, useEffect, useState} from 'react';
import {NavigationContainer, useRoute, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from '../../assets/images/byVoiceLogo.png';
import ProfileImg from '../../assets/images/obama.jpg';
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
  Image,
} from 'react-native';
import Profile from './profile';
import Group from './group';

export default function Main({navigation}) {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [access_token, setAccess_token] = useState(route.params.access_token);
  const [myself, setMyself] = useState(route.params.member_id);
  // 닉네임을 가져오는 부분 추가
  const [groups, setGroups] = useState([]);

  const userLogout = async () => {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('Start');
  };

  const getAllGroups = () => {
    fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/user/group/${myself}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  }).then((response) => response.json())
    .then((data) => {
        if (data) {
          setGroups(data);
        }
    })
    .catch((error) => {
        console.error('로그인 요청 중 오류 발생:', error);
    });
  };

  useEffect(() => {
    getAllGroups();
  }, [isFocused]);

  // const groups = [
  //   {
  //     groupImage: ProfileImg,
  //     groupName: '오바마 가족 방',
  //     groupElement: '구성원: 오바마,트럼프,바이든,힐러리,문재인,윤석열...',
  //   },
  //   {
  //     groupImage: ProfileImg,
  //     groupName: '바이든 가족 방',
  //     groupElement: '구성원: 오바마,트럼프,바이든,힐러리,문재인,윤석열...',
  //   },
  //   {
  //     groupImage: ProfileImg,
  //     groupName: '트럼프 가족 방',
  //     groupElement: '구성원: 오바마,트럼프,바이든,힐러리,문재인,윤석열...',
  //   },
  //   {
  //     groupImage: ProfileImg,
  //     groupName: '문재인 가족 방',
  //     groupElement: '구성원: 오바마,트럼프,바이든,힐러리,문재인,윤석열...',
  //   },
  //   {
  //     groupImage: ProfileImg,
  //     groupName: '윤석열 가족 방',
  //     groupElement: '구성원: 오바마,트럼프,바이든,힐러리,문재인,윤석열...',
  //   },
  // ];

  const onPressGroup = groupInfo => {
    // teamMaker 누구인지 연동
    navigation.navigate('ManageGroup', {groupInfo, self: myself});
  };

  return (
    <View style={styles.top}>
      <View style={styles.header}>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => userLogout()}>
            <View style={styles.logoutBtn}><Text style={styles.logoutText}>로그아웃</Text></View>
          </TouchableOpacity>
        </View>
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
          {groups.map((group, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressGroup(group)}
              activeOpacity={0.8}>
              <View>
                <Group
                  groupImage={ProfileImg}
                  groupName={group.groupName}
                  groupElement={group.members}
                  groupCode={group.groupCode}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.addGroupBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('ConnectScreen', {access_token, member: myself})}>
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
    paddingBottom: 200,
  },
  logoutContainer: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtn: {
    backgroundColor: '#3AD277',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#DFF9F0',
    fontSize: 12,
    fontWeight: '600',
  }
});
