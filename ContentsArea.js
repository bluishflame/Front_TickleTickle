import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ContentsArea = () => {
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleLocationButtonClick = () => {
    // RegisterNewItemMap.js로 이동하는 코드 추가
    // 예를 들어, navigation.navigate('RegisterNewItemMap');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>추가 설명</Text>
      <TextInput
        style={styles.textarea}
        placeholder="물건에 대한 설명을 입력해주세요"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
        maxLength={65535}
        placeholderTextColor="#B8B8B8"
      />

      <Text style={styles.title}>#나눔 희망 일시</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.buttonText}>일시 추가</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.title}>#나눔 희망 장소</Text>
      <TouchableOpacity onPress={handleLocationButtonClick} style={styles.locationButton}>
        <Text style={styles.buttonText}>장소 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textarea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    color: '#B8B8B8',
  },
  dateButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  locationButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContentsArea;