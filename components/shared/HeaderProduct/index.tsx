import React from 'react';
import { colors } from '../../../utils/themes';
import { styles } from './styles';
import { Text } from '../../core';
import { View } from 'react-native';

type Props = {
  title?: string;
  secendTitle?: string;
};

export default function HeaderProduct({ secendTitle, title }: Props) {
  return (
    <View style={styles.productBanner}>
      <Text variant="h4" textStyle={{ color: colors.white }}>
        {title}
      </Text>
    
      <Text variant="subtitle2" textStyle={styles.bannerSubtitle}>
        {secendTitle}
      </Text>
    </View>
  );
}
