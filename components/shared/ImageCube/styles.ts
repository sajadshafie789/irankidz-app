import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 8,
    borderRadius: 4,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 450,
    width: '87%',
    position: 'relative',
    backgroundColor: colors.white,
  },
  box1: {
    zIndex: -1,
    position: 'absolute',
    left: -12,
    bottom: -12,
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  box2: {
    borderRadius: 12,
    zIndex: -1,
    position: 'absolute',
    right: -12,
    top: -12,
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
  },
});
