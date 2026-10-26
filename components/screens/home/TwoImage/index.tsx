import { ImageBackground, View } from 'react-native';
import React from 'react';
import { Text } from '../../../core';
import { styles } from './styles';

type Props = {};

export default function TwoImage({}: Props) {
  return (
    <View style={{ marginTop: 24 }}>
      <ImageBackground
        source={{
          uri: 'https://api.irankidz.com/images/opt_1666093297125.webp',
        }}
        style={styles.banner}
        // imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text variant="h5">زیباترین عروسک‌ها</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={{
          uri: 'https://api.irankidz.com/images/opt_1666093351849.webp',
        }}
        style={[styles.banner, { marginTop: 12 }]}
        // imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text variant="h5">ماشین و هواپیمای کنترلی</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
