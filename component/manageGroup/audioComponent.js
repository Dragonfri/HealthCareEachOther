/* eslint-disable prettier/prettier */
import {React, useState } from 'react';

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

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

import AudioRecord from 'react-native-audio-record';
import Sound from 'react-native-sound';

const AudioComponent = () => {

    const [isRecording, setIsRecording] = useState(false);
    const [recordedFile, setRecordedFile] = useState(null);


    const checkAndRequestPermission = async () => {
        const result = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);

        if (result === RESULTS.DENIED) {
          const permissionResult = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);

          if (permissionResult !== RESULTS.GRANTED) {
            console.log('음성 녹음 권한이 거부되었습니다.');
            return;
          }
        }
    };

    const startRecording = async () => {
        checkAndRequestPermission();

        AudioRecord.init({
          sampleRate: 44100,
          channels: 1,        // 1 or 2, default 1
          bitsPerSample: 16,  // 8 or 16, default 16
          audioSource: 6,
        });

        AudioRecord.start();
        setIsRecording(true);
        setRecordedFile(null);

        // 녹음 중인 동안 로직 추가

        this.recordingInterval = setTimeout(async () => {
          const audioPath = await AudioRecord.stop();
          setIsRecording(true);
          setRecordedFile(audioPath);
        }, 60000); // 녹음 시간 (60초)을 조절하세요
      };

    const StopRecording = async () => {
        clearTimeout(this.recordingInterval);
        const audioPath = await AudioRecord.stop();
        setIsRecording(false);
        setRecordedFile(audioPath);
    };

    const playRecording = () => {
        console.log(recordedFile);
        if (recordedFile) {
            const sound = new Sound(recordedFile, '', (error) => {
            if (error) {
                console.log('Error', error);
            } else {
                sound.play(() => sound.release());
            }
            });
        }
    };

    return (
        <View>
            <Button
                title={isRecording ? '녹음 중지' : '녹음 시작'}
                onPress={isRecording ? StopRecording : startRecording}
            />
            <Button title="녹음 듣기" onPress={() => playRecording()} />
        </View>
    );
};

export default AudioComponent;
