import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../utils/themes';

type Props = {};

export default function index({}: Props) {
  return <ActivityIndicator color={colors.primary} size="large" />;
}
