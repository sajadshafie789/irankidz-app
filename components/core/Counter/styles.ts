import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    height: 53,
    width: '100%',
    overflow: 'hidden',
  },
  button: {
    width: 36,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  buttonText: {
    fontSize: 22,
    color: colors.text,
    fontWeight: '600',
  },
  count: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.35,
  },
});
