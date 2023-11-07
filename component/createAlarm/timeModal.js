import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import TimePicker from './timePicker';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

export default function TimeModal({
  onSubmit,
  isModalVisible,
  setIsModalVisible,
}) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const handleTimeSelected = time => {
    setSelectedTime(time); // 선택한 시간 상태 업데이트
    // console.log(time); // 여기서 선택한 시간을 처리합니다.
  };

  const handleSubmit = () => {
    // 선택한 요일과 시간을 처리하는 로직
    console.log('Selected Days: ', selectedDays);
    console.log('Selected Time: ', selectedTime);

    // onSubmit props를 호출하여 선택된 요일과 시간을 CreateAlarmScreen으로 전달
    onSubmit(selectedDays, selectedTime);
    setIsModalVisible(false);

    // 여기서 백엔드로 데이터를 보내거나 다른 처리를 할 수 있습니다.
  };
  if (!isModalVisible) return null;

  const toggleDay = day => {
    setSelectedDays(prevState =>
      prevState.includes(day)
        ? prevState.filter(d => d !== day)
        : [...prevState, day],
    );
  };

  return (
    <View style={styles.TopContainer}>
      <Text style={styles.TitleText}>반복할 요일을 선택하세요.</Text>
      <View style={styles.daysContainer}>
        {daysOfWeek.map(day => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.selectedDayButton,
            ]}
            onPress={() => toggleDay(day)}>
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.TitleText}>시간을 선택하세요.</Text>
      <TimeSelector onTimeSelected={handleTimeSelected} />

      <View style={styles.SubmitContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.SubmitBtn}>
          <Text style={styles.btnText}>설정하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginBottom: '20%',
  },
  dayButton: {
    marginHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  selectedDayButton: {
    backgroundColor: '#3AD277',
  },
  dayText: {
    color: 'black',
    fontWeight: '600',
  },
  TitleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: '5%',
  },
  SubmitContainer: {
    marginTop: '30%',
    width: '100%',
    height: '10%',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitBtn: {
    width: '80%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: '#3AD277',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },

  // Add styles for your time picker here
});
