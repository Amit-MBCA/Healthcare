import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppConstants } from '../utils/appConstants';
import { colors } from '../themes/colors';

export default function RemindersScreen() {
  const prescriptions = useSelector((state: RootState) => state.auth.prescriptions);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{AppConstants.reminders.title}</Text>
      </View>

      {prescriptions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{AppConstants.reminders.noPrescriptions}</Text>
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
                <Text style={styles.cardTitle}>{AppConstants.reminders.prescription}</Text>
                <Text style={styles.cardSubtitle}>{AppConstants.reminders.uploadedSuccess}</Text>
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
    backgroundColor: colors.lightGrayBg,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lightBorder,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: colors.lightBorder,
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
    color: colors.dimSecondayColor,
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.dimSecondayColor,
    fontSize: 16,
  },
});
