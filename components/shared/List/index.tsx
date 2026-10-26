import React from 'react';
import { FlatList, View } from 'react-native';
import { Product } from '../../../types/product';
import { styles } from './styles';
import { Button, Image, Loading, Text } from '../../core';
import { BASE_IMG } from '../../../Api/config';

type Props = {
  list: Product[];
  type: 'primary' | 'outline';
  isLoading: boolean;
};

export default function List({ list, type, isLoading }: Props) {
  return (
    <View>
      {isLoading ? (
        <View
          style={{
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loading />
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.uuid}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => {
            if (type === 'outline') {
              return (
                <View style={styles.containerCard}>
                  <Image
                    source={{ uri: BASE_IMG + item.fileImage.name }}
                    width={150}
                    height={150}
                    resizeMode="cover"
                  />
                  <Text variant="subtitle2">{item.title}</Text>
                  <Text variant="h4" style={{ marginBottom: 12 }}>
                    {item.price.toLocaleString('fa-IR')} تومان
                  </Text>
                  <Button title="افزودن به سبد خرید" variant="outline" />
                </View>
              );
            } else {
              return (
                <View style={styles.containerCard}>
                  <Image
                    source={{ uri: BASE_IMG + item.fileImage.name }}
                    width={150}
                    height={190}
                    resizeMode="cover"
                  />
                  <Text variant="subtitle2">{item.title}</Text>
                  <Text variant="h4" style={{ marginBottom: 12 }}>
                    {item.price.toLocaleString('fa-IR')} تومان
                  </Text>
                  <Button title="افزودن به سبد خرید" variant="primary" />
                </View>
              );
            }
          }}
        />
      )}
    </View>
  );
}
