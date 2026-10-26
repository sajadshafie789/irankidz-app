import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ImageCube from '../../../shared/ImageCube';
import { Button, Image, Text } from '../../../core';
import { Product } from '../../../../types/product';
import API_ROUTES from '../../../../Api/api';
import styles from './styles';
import { BASE_IMG } from '../../../../Api/config';

type Props = {};

export default function Favorite({}: Props) {
  const [list, setList] = useState<Product[]>([]);

  const getList = async () => {
    const response = await API_ROUTES.productList({
      orderBy: 'favNum',
      start: 0,
      limit: 3,
    });
    setList(response.data.response);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <View style={{ marginTop: 60 }}>
      <ImageCube uri="https://api.irankidz.com/images/th_1670222564177.webp" />
      <View style={{ marginTop: 60 }}>
        <Text variant="h3">محبوب ترین ها</Text>
        <FlatList
          data={list}
          keyExtractor={item => item.uuid}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer}>
                <Image
                  source={{ uri: BASE_IMG + item.fileImage.name }}
                  height={125}
                />
                <Text variant="subtitle2" style={{ marginBottom: 12 }}>
                  {item.title}
                </Text>
                <Text variant="h4">
                  {item.price.toLocaleString('fa-IR')} تومان
                </Text>
                <Button
                  title="افزودن به سبد خرید"
                  buttonStyle={{
                    width: '65%',
                    paddingVertical: 0,
                    paddingHorizontal: 8,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
