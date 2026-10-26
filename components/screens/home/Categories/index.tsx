import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Image, Text } from '../../../core';
import { Category } from '../../../../types/categories';
import API_ROUTES from '../../../../Api/api';
import { styles } from './styles';
import { BASE_IMG } from '../../../../Api/config';

type Props = {};

export default function Categories({}: Props) {
  const [data, setData] = useState<Category[]>([]);
  const CategoryAPI = () => {
    API_ROUTES.categoryList()
      .then(res => {
        setData(res.data.response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    CategoryAPI();
  }, []);
  console.log(data);
  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        return (
          <View style={styles.containerCard}>
            <Image
              source={{ uri: BASE_IMG + item.fileImage.name }}
              width={80}
              height={80}
              resizeMode="cover"
            />
            <Text variant="subtitle2">{item.title}</Text>
          </View>
        );
      }}
    />
  );
}
