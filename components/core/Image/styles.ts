
import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  loader: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
