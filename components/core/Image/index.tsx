
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  View,
} from 'react-native';

import { colors } from '../../../utils/themes';
import styles from './styles';

export type GlobalImageProps = {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  borderRadius?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  style?: StyleProp<ImageStyle>;
  fallbackSource?: ImageSourcePropType;
  showLoading?: boolean;
};

const GlobalImage = ({
  source,
  width = 100,
  height = 100,
  borderRadius = 12,
  resizeMode = 'cover',
  style,
  fallbackSource,
  showLoading = true,
}: GlobalImageProps) => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageSource = hasError && fallbackSource
    ? fallbackSource
    : source;

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
        },
      ]}
    >
      {showLoading && loading && !hasError && (
        <View style={styles.loader}>
          <ActivityIndicator
            size="small"
            color={colors.primary}
          />
        </View>
      )}

      <Image
        source={imageSource}
        style={[
          styles.image,
          { width, height, borderRadius },
          style,
        ]}
        resizeMode={resizeMode}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setHasError(true);
        }}
      />
    </View>
  );
};

export default GlobalImage;
