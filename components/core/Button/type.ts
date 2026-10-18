import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger';

export interface ButtonProps
  extends Omit<PressableProps, 'style' | 'children'> {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}