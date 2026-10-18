import { StyleSheet } from 'react-native';
import { colors } from '../../utils/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    width: 172,
    height: 82,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 8,
  },

  logoText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#2D67D2',
  },

  appName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    writingDirection: 'rtl',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: '#E7EEFF',
    textAlign: 'center',
    writingDirection: 'rtl',
  },

  loadingContainer: {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
    gap: 12,
  },

  loadingText: {
    fontSize: 13,
    color: '#FFFFFF',
    writingDirection: 'rtl',
  },
});

export default styles;