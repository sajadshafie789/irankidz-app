import { StyleProp, ViewStyle } from "react-native";

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  animationType?: ModalProps['animationType'];
  contentStyle?: StyleProp<ViewStyle>;
}