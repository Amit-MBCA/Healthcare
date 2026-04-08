import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions</Text>
      <Text style={styles.subtitle}>List of questions will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginTop: 10,
  },
});
