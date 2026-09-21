import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RESTAURANTES } from '../data/restaurantes';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ConfigScreen = () => {
  return (
    <SafeAreaView style={styles.centerScreen}>
      <Ionicons name="settings-outline" size={60} color="#888" />
      <Text style={styles.screenText}>Configuración</Text>

      <View style={styles.chipsContainer}>
        {RESTAURANTES.map((restaurante) => (
          <Pressable
            onPress={() => console.log(restaurante.nombre)
            }
            style={styles.chip}
          >
            <Text key={restaurante.id}>
              {restaurante.nombre}
            </Text>
          </Pressable>
        ))}
      </View>

    </SafeAreaView>
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
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#e2e8f0',
    margin: 5,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});