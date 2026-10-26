import React, { useEffect, useState } from 'react';
import API_ROUTES from '../../../../Api/api';
import { FlatList, View } from 'react-native';
import { Product } from '../../../../types/product';
import { Button, Image, Text } from '../../../core';
import { styles } from './styles';
import { BASE_IMG } from '../../../../Api/config';
import { colors } from '../../../../utils/themes';

type Props = {};

export default function IrankidzNewest({}: Props) {
  const [data, setData] = useState<Product | null>(null);
  const [list, setList] = useState<Product[]>([]);
  // list?locationId=1&justStockCount=true&notId=94&subCategoryId=42,10,49,47,3,56,19,39,50&orderBy=createdAt&sort=ASC&&start=0&limit=8
  const getData = async () => {
    const response = await API_ROUTES.productList({
      start: 0,
      limit: 1,
      orderBy: 'viewNum',
    });
    setData(response.data.response[0]);
  };
  const getList = async () => {
    const response = await API_ROUTES.productList({
      subCategoryId: [42, 10, 49, 47, 3, 56, 19, 39, 50],
      sort: 'ASC',
      start: 0,
      limit: 8,
    });
    setList(response.data.response);
  };
  useEffect(() => {
    getData();
    getList();
  }, []);

  return (
    <View style={{ marginTop: 60 }}>
      <Text variant="h4">جدیدترین ایران کیدز</Text>
      <View style={styles.container}>
        <Image
          source={{ uri: BASE_IMG + data?.fileImage.name }}
          width={150}
          height={150}
        />
        <Text variant="body1" style={{ marginTop: 24 }}>
          مدل
        </Text>
        <Text variant="subtitle1">{data?.title}</Text>
        <Text variant="h4">{data?.price.toLocaleString('fa-IR')} تومان</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.uuid}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
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
        }}
      />
    </View>
  );
}
