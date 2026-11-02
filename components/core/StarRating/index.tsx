import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { StarRatingProps } from './type';
import { styles } from './styles';

export default function StarRating({
  rating,
  onChange,
  size = 28,
  color = '#FFB800',
  disabled = false,
}: StarRatingProps) {
  return (
    <View style={styles.container}>
      {[5, 4, 3, 2, 1].map(value => {
        const active = value <= rating;

        return (
          <Pressable
            key={value}
            disabled={disabled}
            onPress={() => onChange(value)}
            hitSlop={5}
          >
            <Ionicons
              name={active ? 'star' : 'star-outline'}
              size={size}
              color={active ? color : '#CFCFCF'}
            />
          </Pressable>
        );
      })}
    </View>
  );
}
