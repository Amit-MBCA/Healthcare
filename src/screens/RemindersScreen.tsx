import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function RemindersScreen() {
  const prescriptions = useSelector((state: RootState) => state.auth.prescriptions);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prescription Reminders</Text>
      </View>

      {prescriptions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No prescriptions uploaded yet.</Text>
        </View>
      ) : (
        <FlatList
          data={prescriptions}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Prescription</Text>
                <Text style={styles.cardSubtitle}>Uploaded successfully</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2, // shadow for android
    shadowColor: '#000', // shadow for ios
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0',
  },
  cardContent: {
    padding: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#666',
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
});
