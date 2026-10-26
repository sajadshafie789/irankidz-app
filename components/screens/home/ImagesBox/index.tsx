import React from 'react';
import { FlatList, View } from 'react-native';
import { Image } from '../../../core';

type Props = {};
const images = [
  { id: '1', uri: 'https://api.irankidz.com/images/opt_1676903100208.webp' },
  { id: '2', uri: 'https://api.irankidz.com/images/opt_1676903090316.webp' },
  {
    id: '3',
    uri: 'https://api.irankidz.com/images/opt_1676903064594.webp',
  },
];
export default function ImagesBox({}: Props) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://api.irankidz.com/images/opt_1675259783159.webp',
        }}
        resizeMode="cover"
        width={'100%'}
        height={200}
        style={{ backgroundColor: 'red' }}
      />
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 100 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            width={170}
            height={100}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
}
