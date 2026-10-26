import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type SearchInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'style'
> & {
  value: string;
  onChangeText: (value: string) => void;
  onSearch?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  showClearButton?: boolean;
};
