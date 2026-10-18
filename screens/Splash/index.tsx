import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import Text from '../../components/core/Text';

import styles from './styles';
import { colors } from '../../utils/themes';

const SplashScreen = () => {
  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.logoContainer}>
        <Text variant="h2" color={colors.primary} weight="800" align="center">
          ایران کیدز
        </Text>
      </View>

      <Text variant="h2" color="#FFFFFF" weight="800" align="center">
        اپلیکیشن من
      </Text>

      <Text
        variant="body2"
        color="#E7EEFF"
        align="center"
        textStyle={{ marginTop: 10 }}
      >
        تجربه‌ای ساده و سریع
      </Text>

      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />

        <Text variant="caption" color="#FFFFFF" align="center">
          در حال آماده‌سازی...
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
