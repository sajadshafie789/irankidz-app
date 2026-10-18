
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minHeight: 32,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  checked: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
  },

  label: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.75,
  },

  errorBorder: {
    borderColor: '#DC2626',
  },

  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginTop: 5,
  },
});
