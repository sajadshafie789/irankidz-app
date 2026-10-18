import { StyleProp, TextProps, TextStyle } from 'react-native';
import { TypographyVariant } from './styles';

export interface GlobalTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  fontFamily?: string;
  textStyle?: StyleProp<TextStyle>;
}
