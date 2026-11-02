import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { Button, Image, Text } from '../../../core';
import { Product } from '../../../../types/product';
import API_ROUTES from '../../../../Api/api';
import { BASE_IMG } from '../../../../Api/config';
import { styles } from './styles';
import { useAppNavigation } from '../../../../hooks/Navigation/useAppNavigation';

type Props = {};

export default function ProductNewest({}: Props) {
  const navigation = useAppNavigation();
  const [data, setData] = useState<Product[]>([]);
  const getData = async () => {
    const response = await API_ROUTES.productList({
      subCategoryId: [20],
      notId: 238,
      start: 0,
      limit: 10,
      list: 'similar',
      locationId: '',
      justStockCount: '',
      sort: '',
      orderBy: '',
    });
    setData(response.data.response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ marginTop: 60 }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text variant="h4">جدیدترین محصولات</Text>
        <Text variant="subtitle2">مشاهده همه</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.uuid}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: String(item.id),
                  link: item.link,
                });
              }}
              style={styles.containerCard}
            >
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
            </Pressable>
          );
        }}
      />
    </View>
  );
}
