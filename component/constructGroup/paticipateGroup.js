/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from 'react-native-config';


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


export default function ParticipateGroup({navigation}) {
    const [groupCode, setGroupCode] = useState('');
    const route = useRoute();
    const member_id = route.params.member_id;
    const access_token = route.params.access_token;

    const participateGroup = () => {

        fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/user/group/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'groupCode': groupCode, 'memberId': member_id}),
        }).then((data) => {
              if (data) {
                  navigation.navigate('Main', {access_token, member: member_id});
              } else {
                  alert('그룹 정보가 없습니다.');
              }
          })
          .catch((error) => {
              console.error("그룹 참여 중 오류 발생:", error);
          });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerText}>초대 코드를 입력해주세요.</Text></View>
            <View style={styles.inputContainer}>
                <View style={styles.textView}><Text style={styles.inputHeadText}>초대 코드</Text></View>
                <View style={styles.textView}><TextInput
                    style={styles.nameInput}
                    placeholder="초대 코드 입력"
                    placeholderTextColor="gray"
                    value={groupCode}
                    onChangeText={setGroupCode}
                    />
                </View>
                <View style={styles.descriptionTextView}><Text style={styles.descriptionText}>전달 받은 초대 코드를 붙여넣어주세요.</Text></View>
            </View>

            <View style={styles.addGroupBtn}>
                <TouchableOpacity onPress={() => participateGroup()}>
                    <Text style={styles.btnText}>그룹 참여</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    header: {
        marginTop: 50,
        marginLeft: 30,
    },
    headerText: {
        color: 'black',
        fontSize: 24,
        fontWeight: '600',
    },
    inputContainer: {
        marginTop: 60,
        marginLeft: 30,
    },
    nameInput: {
        width: '90%',
        // height: '18%',
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    inputHeadText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    descriptionText: {
        color: 'black',
        fontSize: 13,
        fontWeight: '400',
    },
    textView: {
        marginTop: 10,
        marginBottom: 10,
    },
    descriptionTextView: {
        marginTop: 10,
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