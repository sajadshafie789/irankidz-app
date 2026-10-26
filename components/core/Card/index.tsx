import React from 'react';
import { Image, Pressable, View, ActivityIndicator } from 'react-native';

import { colors } from '../../../utils/themes';
import styles from './styles';
import { GlobalProductCardProps } from './type';
import { Text } from '..';

export default function ProductCard({
  product,
  onAddToCart,
  isAddingToCart = false,
  imageBaseUrl,
  disabled = false,
}: GlobalProductCardProps) {
  const imageUri = product.fileImage?.name
    ? `${imageBaseUrl}${product.fileImage.name}`
    : undefined;

  const isOutOfStock = product.stockCount <= 0;

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2} variant="body2">
          {product.title}
        </Text>


        <Text style={styles.price}>
          {product.price.toLocaleString('fa-IR')} تومان
        </Text>

        <Text
          style={[styles.stock, isOutOfStock && styles.outOfStock]}
          variant="subtitle1"
        >
          {isOutOfStock
            ? 'ناموجود'
            : `موجودی: ${product.stockCount.toLocaleString('fa-IR')}`}
        </Text>

        <Pressable
          onPress={() => onAddToCart(product)}
          disabled={disabled || isAddingToCart || isOutOfStock}
          style={[
            styles.addButton,
            (disabled || isAddingToCart || isOutOfStock) &&
              styles.disabledButton,
          ]}
        >
          {isAddingToCart ? (
            <ActivityIndicator color={colors.white} size="small" />
          ) : (
            <Text style={styles.buttonText} variant="subtitle1">
              {isOutOfStock ? 'ناموجود' : 'افزودن به سبد خرید'}
            </Text>
          )}
        </Pressable>
      </View>
      <Image
        source={imageUri ? { uri: imageUri } : undefined}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}
