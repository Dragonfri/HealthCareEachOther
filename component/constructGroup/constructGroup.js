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


export default function ConstructGroup({navigation}) {
    const route = useRoute();
    const [access_token, setAccess_token] = useState(route.params.access_token);
    const [member_id, setMember] = useState(route.params.member_id);
    const [groupName, setGroupName] = useState('');
    const examText = "ex) 우리 가족 운동 알람방";

    const requestGroupCreation = () => {
        fetch(`${Config.REACT_APP_IP_ADDRESS}:8080/api/mvp/user/group`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
            },
            body: JSON.stringify({'groupName': groupName, 'memberId': member_id}),
        }).then((response) => response.json())
          .then((data) => {
              console.log(data);
              if (data.groupCode) {
                  navigation.navigate('Main', {access_token, member_id});
              } else {
                  alert('그룹 생성 실패');
              }
          })
          .catch((error) => {
              console.error("그룹 생성 중 오류 발생:", error);
          });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerText}>그룹 이름을 적어주세요.</Text></View>
            <View style={styles.inputContainer}>
                <View style={styles.textView}><Text style={styles.inputHeadText}>그룹 이름</Text></View>
                <View style={styles.textView}><TextInput
                    style={styles.nameInput}
                    placeholder="그룹이름 입력"
                    placeholderTextColor="gray"
                    value={groupName}
                    onChangeText={setGroupName}
                    />
                </View>
                <View style={styles.descriptionTextView}><Text style={styles.descriptionText}>알람의 용도에 맞게 이름을 설정해주세요.</Text></View>
                <View style={styles.descriptionExamTextView}><Text style={styles.descriptionExamText}>{examText}</Text></View>
            </View>

            <View style={styles.addGroupBtn}>
                <TouchableOpacity onPress={() => requestGroupCreation()}>
                    <Text style={styles.btnText}>그룹 생성</Text>
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
    descriptionExamText: {
        color: '#9EB38E',
        fontSize: 12,
    },
    textView: {
        marginTop: 10,
        marginBottom: 10,
    },
    descriptionTextView: {
        marginTop: 10,
    },
    descriptionExamTextView: {
        marginTop: 5,
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