import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RegisterNewItemMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapPress = (event) => {
    // 지도를 터치할 때마다 선택된 위치 갱신
    setSelectedLocation(event.nativeEvent.coordinate);
  };

  const handleSelectComplete = () => {
    // 선택 완료 버튼을 눌렀을 때
    if (selectedLocation) {
      // 선택한 위치를 사용하여 원하는 작업 수행
      console.log('Selected Location:', selectedLocation);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>나눔을 원하는 장소를 선택해주세요</Text>
      <Text style={styles.messageText}>지도를 움직여 선택해주세요</Text>
      
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} />
        )}
      </MapView>

      <TouchableOpacity onPress={handleSelectComplete} style={styles.completeButton}>
        <Text style={styles.buttonText}>선택 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  map: {
    flex: 1,
  },
  completeButton: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterNewItemMap;
