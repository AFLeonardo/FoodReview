import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export const MapaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="map-outline" size={60} color="#888" />

      <Text style={styles.screenText}>
        Mapa de Restaurantes
      </Text>

      <Text>
        Hola estas en la seccion de mapas.
      </Text>

      <Image
        style={styles.image}
        source={require('../src/maps.png')}
        contentFit="contain"
        transition={1000}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },

  screenText: {
    marginTop: 12,
    marginBottom: 10,
    fontSize: 16,
    color: '#64748b',
  },

  image: {
    width: '100%',
    height: 400,
  },
});