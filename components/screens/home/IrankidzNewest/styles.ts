import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 40,
    marginTop: 12,
  },
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
  },
});
