import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Restaurant } from '../types/restaurant';

interface Props {
  item: Restaurant;
  style?: StyleProp<ViewStyle>;
}

export const RestaurantCard: React.FC<Props> = ({ item, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={{ uri: item.logo }} style={styles.cardImage} />

      <View style={styles.cardInfo}>
        <Text style={styles.restaurantName} numberOfLines={1}>
          {item.nombre}
        </Text>

        <View style={styles.ratingRow}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingBadgeText}>{item.rating.toFixed(1)}</Text>
          </View>
          <View style={styles.starsContainer}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Ionicons
                key={i}
                name={i < item.estrellas ? 'star' : 'star-outline'}
                size={16}
                color="#f59e0b"
              />
            ))}
          </View>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.distanceText}>{item.distancia}</Text>
          <Text style={styles.foodTypeText}>{item.tipoComida}</Text>
        </View>

        <Text style={styles.priceText}>{item.precio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e2e8f0',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
    // justify: 'space-between',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  ratingBadge: {
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  ratingBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#334155',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  distanceText: {
    fontSize: 13,
    color: '#64748b',
  },
  foodTypeText: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16a34a',
  },
});