import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRadius: 14,
    padding: 12,

    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 10,
    backgroundColor: colors.border,
    marginRight: 10,
  },
  info: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    width: '100%',
    color: colors.text,
    textAlign: 'right',
  },
  price: {
    fontSize: 12,
    color: colors.primary,
    marginTop: 8,
    textAlign: 'right',
  },
  stock: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  outOfStock: {
    color: colors.error,
  },
  addButton: {
    alignSelf: 'stretch',
    minHeight: 38,
    // paddingHorizontal: 12,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'IRANYekan-Bold',
    fontSize: 12,
    color: colors.white,
  },
});

export default styles;
