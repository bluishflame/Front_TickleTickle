import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker'; // 이미지 피커 라이브러리 추가

const TitleArea = () => {
  // 상태 변수 정의
  const [title, setTitle] = useState(''); // 제목을 담는 상태 변수
  const [selectedImages, setSelectedImages] = useState([]); // 선택된 이미지를 담는 상태 변수

  // 카메라로 사진 찍기 처리 함수
  const handleCameraCapture = () => {

    const options = {
      title: 'Select Photo', 
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // 이미지 피커 라이브러리 사용하여 사진 찍기
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) {
        // 사용자가 취소하거나 오류 발생 시 처리
        console.log('Camera launch cancelled or encountered an error');
      } else {
        // 선택된 이미지를 추가
        setSelectedImages((prevImages) => [...prevImages, { uri: response.uri }]);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* 카메라 버튼 */}
      <TouchableOpacity onPress={handleCameraCapture} style={styles.cameraButton}>
        <Text style={styles.cameraButtonText}>사진 추가</Text>
      </TouchableOpacity>

      {/* 선택된 이미지 표시 영역 */}
      {selectedImages.length > 0 && (
        <View style={styles.imageContainer}>
          {/* 선택된 이미지 표시 */}
          {selectedImages.map((image, index) => (
            <Image key={index} source={{ uri: image.uri }} style={styles.image} />
          ))}
        </View>
      )}

     {/* 제목 */} 
      <Text style={styles.titleText}>제목</Text>
      <TextInput
        style={styles.input}
        placeholder="나눔 물건을 입력해주세요"
        value={title}
        onChangeText={(text) => setTitle(text)}
        maxLength={40}
        minLength={3}
      />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
  },
  cameraButton: {
    backgroundColor: '#C0C0C0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#C0C0C0',
    marginTop: 5,
    padding: 8,
  },
});

export default TitleArea;
