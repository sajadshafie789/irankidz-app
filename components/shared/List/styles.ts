import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  listContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
  },
  containerCard: {
    width: 265,
    height: 350,
    borderRightWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
  },
});
