import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  containerCard: {
    borderRightWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 160,
  },
});
