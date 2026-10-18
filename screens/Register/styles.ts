import { StyleSheet } from 'react-native';
import { colors } from '../../utils/themes';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  logo: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 28,
  },

  title: {
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 36,
  },

  form: {
    gap: 12,
  },

  passwordContainer: {
    gap: 6,
  },

  passwordToggle: {
    alignSelf: 'flex-start',
    minHeight: 36,
    paddingHorizontal: 12,
  },

  passwordToggleText: {
    fontSize: 12,
  },

  loginButton: {
    minHeight: 52,
    borderRadius: 14,
    marginTop: 8,
  },

  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 8,
  },

  registerButton: {
    minHeight: 36,
    paddingHorizontal: 8,
    borderWidth: 0,
  },

  registerButtonText: {
    color: colors.primary,
  },
});

export default styles;
