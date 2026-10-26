import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  containerCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 24,
    width: 250,
    height: 400,
  },
});
