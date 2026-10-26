import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 22,
    color: colors.text,
    textAlign: 'right',
    padding: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexGrow: 1,
  },
  card: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  info: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 12,
  },
  title: {
    fontFamily: 'IRANYekan-Bold',
    fontSize: 14,
    color: colors.text,
    textAlign: 'right',
  },
  price: {
    // fontFamily: 'IRANYekan-Bold',
    fontSize: 14,
    color: colors.primary,
    marginTop: 8,
  },
  stock: {
    fontFamily: 'IRANYekan-Bold',
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  loader: {
    paddingVertical: 20,
  },
  error: {
    fontFamily: 'IRANYekan-Bold',
    textAlign: 'center',
    color: colors.error,
    padding: 16,
  },
  empty: {
    fontFamily: 'IRANYekan-Bold',
    textAlign: 'center',
    color: colors.textSecondary,
    padding: 20,
  },
});

export default styles;
