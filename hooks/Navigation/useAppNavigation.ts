import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './type';

export type AppNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  return useNavigation<AppNavigationProp>();
};