import { StyleProp, ViewStyle } from "react-native";

export interface SelectOption {
  label: string;
  value: string;
}

export interface GlobalSelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}