import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  fullWidth: {
    width: '100%',
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.white,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.accent,
  },

  danger: {
    backgroundColor: '#DC2626',
  },

  text: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },

  primaryText: {
    color: '#FFFFFF',
  },

  secondaryText: {
    color: '#1F2937',
  },

  outlineText: {
    color: colors.primary,
  },

  dangerText: {
    color: '#FFFFFF',
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.8,
  },
});
