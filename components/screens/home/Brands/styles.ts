import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
  },
  cardContainer: {
    borderRightColor: colors.border,
    borderRightWidth: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
