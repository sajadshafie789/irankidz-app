import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/core';

type Props = {};

export default function index({}: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>جست و جو</Text>
    </View>
  );
}
