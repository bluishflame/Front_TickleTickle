import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const TitleArea = () => {
  const [title, setTitle] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const handleCameraCapture = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) {
        console.log('Camera launch cancelled or encountered an error');
      } else {
        setSelectedImages((prevImages) => [...prevImages, { uri: response.uri }]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCameraCapture} style={styles.cameraButton}>
        <Text style={styles.cameraButtonText}>Take Photo</Text>
      </TouchableOpacity>

      {selectedImages.length > 0 && (
        <View style={styles.imageContainer}>
          {selectedImages.map((image, index) => (
            <Image key={index} source={{ uri: image.uri }} style={styles.image} />
          ))}
        </View>
      )}

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
