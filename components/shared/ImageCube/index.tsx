import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Image } from '../../core';

type Props = {
  uri: string;
};

export default function ImageCube({ uri }: Props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.imageContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <Image
          source={{
            uri: uri,
          }}
          height={350}
          width={'100%'}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
