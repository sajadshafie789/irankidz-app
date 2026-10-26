import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    // paddingHorizontal: 4,
    
  },
  focused: {
    borderColor: colors.primary,
  },
  searchButton: {
    width: 20,
    marginLeft:8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    minWidth: 0,
    // paddingVertical: 10,
    color: colors.text,
    fontFamily: 'IRANYekan-Medium',
    fontSize: 14,
  },
  clearButton: {
    width: 28,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
