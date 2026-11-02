import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { processStateProps } from '../../../types/types';

export type PropsType = {
  children: ReactNode;
  state: processStateProps;
  containerStyle?: StyleProp<ViewStyle>;
  emptyMessage?: string;
  infiniteLoading?: boolean;
  errorButtonMessage?: string;
  loading?: boolean;
  errorCallBack?: () => void;
};
