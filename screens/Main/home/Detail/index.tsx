import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../../components/core';

type Props = {};

export default function ProductDetails({}: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>جزییات محصول</Text>
    </View>
  );
}
