import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    marginTop: 24,
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 300,
    paddingVertical: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});

export default styles;
