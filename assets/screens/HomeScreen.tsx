import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RESTAURANTES } from '../data/restaurantes';
import { RestaurantCard } from '../components/RestaurantCard';

const CATEGORIAS = ['Todas', 'Mexicana', 'China', 'Japonesa', 'Italiana', 'Postres'];

export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Optimización de filtrado usando useMemo
  const filteredData = useMemo(() => {
    return RESTAURANTES.filter((item) => {
      const matchesSearch = item.nombre.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === 'Todas' || item.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Food Review App</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar restaurante..."
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.filterRow}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.filterButton,
              selectedCategory === cat && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedCategory === cat && styles.filterButtonTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#0f172a' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, height: 40, fontSize: 15 },
  searchIcon: { marginLeft: 8 },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#e2e8f0',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  filterButtonActive: { backgroundColor: '#2563eb', borderColor: '#2563eb' },
  filterButtonText: { fontSize: 13, color: '#334155', fontWeight: '500' },
  filterButtonTextActive: { color: '#ffffff' },
  listContainer: { paddingHorizontal: 16, paddingBottom: 20 },
});