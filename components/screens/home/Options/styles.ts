import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    backgroundColor: colors.white,
    marginTop: 24,
  },
  containerCard: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});
