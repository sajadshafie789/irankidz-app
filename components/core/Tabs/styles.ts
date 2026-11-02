import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  scrollContent: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'stretch',
  },
  tab: {
    minHeight: 48,
    minWidth: 72,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  flexTab: {
    flex: 1,
  },
  label: {
    fontFamily: 'IRANYekan-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
  activeLabel: {
    fontFamily: 'IRANYekan-Bold',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    right: 8,
    height: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  disabled: {
    opacity: 0.4,
  },
});
