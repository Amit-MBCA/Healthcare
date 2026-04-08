import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppConstants } from '../utils/appConstants';
import { colors } from '../themes/colors';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AppConstants.calendar.title}</Text>
      <Text style={styles.subtitle}>{AppConstants.calendar.subtitle}</Text>
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
    color: colors.dimSecondayColor,
    marginTop: 10,
  },
});
