import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MapaScreen = () => {
  return (
    <View style={styles.centerScreen}>
      <Ionicons name="map-outline" size={60} color="#888" />
      <Text style={styles.screenText}>Mapa de Restaurantes</Text>
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