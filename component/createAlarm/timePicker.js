import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ITEM_HEIGHT = 50; // 한 번에 하나의 아이템을 보여주기 위한 아이템 높이

export default TimeSelector = ({onTimeSelected}) => {
  const [selectedHours, setSelectedHours] = useState('00');
  const [selectedMinutes, setSelectedMinutes] = useState('00');

  // 선택된 시간과 분을 합쳐서 상위 컴포넌트로 넘길 상태 추가
  const [selectedTime, setSelectedTime] = useState(
    `${selectedHours}:${selectedMinutes}`,
  );

  // 선택한 시간을 갱신하는 함수 수정
  const updateTime = (hours, minutes) => {
    const newTime = `${hours}:${minutes}`;
    setSelectedTime(newTime); // 선택된 시간 상태 업데이트
    onTimeSelected(newTime); // 상위 컴포넌트로 새로운 시간 전달
  };

  return (
    <View style={styles.timeSelectorContainer}>
      <View style={styles.column}>
        <Text style={styles.columnHeader}>시간</Text>
        <ScrollView
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          style={styles.scrollPicker}>
          {Array.from({length: 24}, (_, i) => {
            const timeValue = i.toString().padStart(2, '0');
            const isSelected = timeValue === selectedHours;
            return (
              <TouchableOpacity
                key={timeValue}
                style={[styles.timeItem, isSelected && styles.selectedTimeItem]}
                onPress={() => {
                  setSelectedHours(timeValue);
                  updateTime(timeValue, selectedMinutes);
                }}>
                <Text
                  style={[
                    styles.timeText,
                    isSelected && styles.selectedTimeText,
                  ]}>
                  {timeValue}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.colon}>:</Text>
      <View style={styles.column}>
        <Text style={styles.columnHeader}>분</Text>
        <ScrollView
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          style={styles.scrollPicker}>
          {Array.from({length: 60}, (_, i) => {
            const timeValue = i.toString().padStart(2, '0');
            const isSelected = timeValue === selectedMinutes;
            return (
              <TouchableOpacity
                key={timeValue}
                style={[styles.timeItem, isSelected && styles.selectedTimeItem]}
                onPress={() => {
                  setSelectedMinutes(timeValue);
                  updateTime(selectedHours, timeValue);
                }}>
                <Text
                  style={[
                    styles.timeText,
                    isSelected && styles.selectedTimeText,
                  ]}>
                  {timeValue}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeSelectorContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  column: {
    // ScrollView와 그 헤더를 담고 있는 컬럼 스타일
    width: '40%',
    alignItems: 'center',
  },
  columnHeader: {
    // 컬럼 헤더 스타일
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 8,
    color: 'white',
  },
  scrollPicker: {
    width: '100%',
    height: ITEM_HEIGHT * 3, // 스크롤뷰의 높이를 아이템 높이의 3배로 설정
  },
  timeItem: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  selectedTimeItem: {
    backgroundColor: '#3AD277', // 선택된 항목의 배경색
  },
  timeText: {
    fontSize: 16,
    color: 'black',
  },
  selectedTimeText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  colon: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
});
