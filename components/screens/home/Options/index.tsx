import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Image, Text } from '../../../core';

const data = [
  {
    uri: 'https://api.irankidz.com/images/th_1665927606895.webp',
    title: 'حمل نقل رایگان',
    description: 'حمل رایگان در تمام سفارشات',
  },
  {
    uri: 'https://api.irankidz.com/images/th_1665927388393.webp',
    title: 'تضمین بازگشت وجه',
    description: 'برگشت وجه در صورت معیوب بودن کالا',
  },
  {
    uri: 'https://api.irankidz.com/images/th_1665926955671.webp',
    title: 'ضمانت',
    description: 'ضمانت اصل بودن کالا',
  },
];

export default function Option() {
  return (
    <View style={styles.container}>
      {data.map(v => {
        return (
          <View style={styles.containerCard} key={v.title}>
            <Image
              width={70}
              height={70}
              source={{ uri: v.uri }}
              resizeMode="contain"
            />
            <View style={{ marginLeft: 24 }}>
              <Text
                variant="subtitle1"
                align="left"
                style={{ marginBottom: 8 }}
              >
                {v.title}
              </Text>
              <Text variant="subtitle2">{v.description}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
