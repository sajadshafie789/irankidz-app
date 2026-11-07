import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button, Image, Text } from '../../core';
import { PropsType } from './type';
import { BASE_IMG } from '../../../Api/config';

export default function FavCard({
  image,
  onAction,
  price,
  title,
  loadingButton,
}: PropsType) {
  return (
    <View style={styles.container}>
      <View style={[styles.headerCard, { marginBottom: 48 }]}>
        <Image
          source={{ uri: BASE_IMG + image }}
          width={70}
          height={140}
          resizeMode="cover"
        />
        <Text variant="h4">{price.toLocaleString('fa-IR')} تومان</Text>
        <Text variant="subtitle2">موجود</Text>
      </View>
      <View style={styles.footerCard}>
        <Text
          variant="subtitle2"
          style={{ flex: 1 }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Button
          onPress={onAction}
          variant="outline"
          loading={loadingButton}
          buttonStyle={{
            width: '40%',
            paddingVertical: 0,
            paddingHorizontal: 0,
            minHeight: 40,
          }}
          title="حدف محصول"
        />
      </View>
    </View>
  );
}
