import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ConfigScreen = () => {
  return (
    <View style={styles.centerScreen}>
      <Ionicons name="settings-outline" size={60} color="#888" />
      <Text style={styles.screenText}>Configuración</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  screenText: {
    marginTop: 12,
    fontSize: 16,
    color: '#64748b',
  },
});