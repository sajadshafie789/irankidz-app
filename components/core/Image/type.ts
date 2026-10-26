import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export type ImageProps = {
  source: ImageSourcePropType;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  style?: StyleProp<ImageStyle>;
  fallbackSource?: ImageSourcePropType;
  showLoading?: boolean;
};
