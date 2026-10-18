import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 36,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default styles;
