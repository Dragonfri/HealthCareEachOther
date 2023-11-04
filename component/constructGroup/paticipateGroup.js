/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
  } from 'react-native';


export default function ConstructGroup({navigation}) {
    const [groupCode, setGroupCode] = useState('');

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
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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