import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  productBanner: {
    backgroundColor: colors.text,
    width: '100%',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  bannerSubtitle: {
    color: colors.textSecondary,
  },
});
