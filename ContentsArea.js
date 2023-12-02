import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const ContentsArea = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contents</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter contents here"
        multiline
      />
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
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
  },
});

export default ContentsArea;
