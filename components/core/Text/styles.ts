import { fonts } from '../../../utils/themes';

export const typography = {
  h1: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '700' as const,
    fontFamily: fonts.extraBold,
  },
  h2: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700' as const,
    fontFamily: fonts.extraBold,
  },
  h3: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '700' as const,
    fontFamily: fonts.bold,
  },
  h4: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700' as const,
    fontFamily: fonts.bold,
  },
  h5: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700' as const,
    fontFamily: fonts.medium,
  },
  h6: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600' as const,
    fontFamily: fonts.medium,
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500' as const,
    fontFamily: fonts.regular,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600' as const,
    fontFamily: fonts.regular,
  },
  body1: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '400' as const,
    fontFamily: fonts.regular,
  },
  body2: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400' as const,
    fontFamily: fonts.regular,
  },
  button: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600' as const,
    fontFamily: fonts.regular,
  },
  caption: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400' as const,
    fontFamily: fonts.regular,
  },
  overline: {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '600' as const,
    fontFamily: fonts.regular,
  },
};

export type TypographyVariant = keyof typeof typography;
