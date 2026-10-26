import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import API_ROUTES from '../../../../Api/api';
import { Product } from '../../../../types/product';

import List from '../../../shared/List';
import ImageCube from '../../../shared/ImageCube';
import { Text } from '../../../core';

type Props = {};

export default function Games({}: Props) {
  const [list, setList] = useState<Product[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const getList = async () => {
    setLoading(true);
    const response = await API_ROUTES.productList({
      subCategoryId: [34],
      notId: 126,
      sort: 'DESC',
      start: 0,
      limit: 8,
    });
    setLoading(false);
    setList(response.data.response);
  };

  useEffect(() => {
    getList();
  }, []);
  console.log(list);
  return (
    <View style={{ marginTop: 60 }}>
      <Text variant="h3"> کنسول بازی</Text>
      <ImageCube uri="https://api.irankidz.com/images/th_1676902959661.webp" />

      <View style={{ marginTop: 60 }}>
        <List type="outline" list={list} isLoading={isLoading} />
      </View>
    </View>
  );
}
