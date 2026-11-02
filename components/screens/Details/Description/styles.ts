import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },

  table: {
    borderColor: colors.border,
    borderWidth: 0.5,
    borderRadius: 4,
    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
  },

  attributeColumn: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRightColor: colors.border,
    borderRightWidth: 0.5,
  },

  valueColumn: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});
