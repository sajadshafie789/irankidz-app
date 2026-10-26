export const colors = {
  primary: '#FF8A65',
  secondary: '#7CC6B8',
  accent: '#FFD166',
  lavender: '#B8A1E3',

  background: '#FFF8F0',
  surface: '#FFFFFF',

  text: '#343434',
  textSecondary: '#777777',

  border: '#F0E5DA',
  error: '#D9534F',
  success: '#378B65',

  white: '#FFFFFF',
  black: '#000000',
} as const;

export const fonts = {
  regular: 'iranyekanwebregularfanum',
  medium: 'iranyekanwebregularfanum',
  bold: 'iranyekanwebboldfanum',
  extraBold: 'iranyekanwebextraboldfanum',
} as const;

export type FontFamily = keyof typeof fonts;
export type AppColors = typeof colors;
