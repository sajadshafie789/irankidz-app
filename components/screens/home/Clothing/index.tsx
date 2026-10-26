import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '../../../core';

import API_ROUTES from '../../../../Api/api';
import { Product } from '../../../../types/product';

import List from '../../../shared/List';
import ImageCube from '../../../shared/ImageCube';

type Props = {};

export default function Clothing({}: Props) {
  const [list, setList] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const getList = async () => {
    setLoading(true);
    const response = await API_ROUTES.productList({
      subCategoryId: [42, 10, 49, 47, 3, 56, 19, 39, 50],
      sort: 'ASC',
      start: 0,
      limit: 8,
    });
    setList(response.data.response);
    setLoading(false);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <View style={{ marginTop: 60 }}>
      <Text variant="h3">پوشاک</Text>
      <ImageCube uri="https://api.irankidz.com/images/th_1674540888469.webp" />
      <List isLoading={isLoading} type="outline" list={list} />
    </View>
  );
}
