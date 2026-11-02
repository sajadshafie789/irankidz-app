import { StyleProp, ViewStyle } from "react-native";

export type TabItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TabsProps = {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  scrollable?: boolean;
  indicatorColor?: string;
  textColor?: string;
  activeTextColor?: string;
  style?: StyleProp<ViewStyle>;
};
