import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from '../../../core';

import API_ROUTES from '../../../../Api/api';
import { Product } from '../../../../types/product';

import List from '../../../shared/List';
import ImageCube from '../../../shared/ImageCube';

type Props = {};

export default function Sets({}: Props) {
  const [list, setList] = useState<Product[]>([]);
  const [listType, setListType] = useState<'toy' | 'Edible'>('Edible');
  const [isLoading, setLoading] = useState<boolean>(false);

  const getList = async (id: number[]) => {
    console.log('############');
    setLoading(true);
    const response = await API_ROUTES.productList({
      subCategoryId: id,
      sort: 'DESC',
      start: 0,
      limit: 8,
    });
    setLoading(false);
    setList(response.data.response);
  };

  useEffect(() => {
    getList([22, 24]);
  }, []);
  console.log(list);
  return (
    <View style={{ marginTop: 60 }}>
      <Text variant="h3">ست ها</Text>
      <ImageCube uri="https://api.irankidz.com/images/th_1670663397409.webp" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 60,
          justifyContent: 'space-between',
        }}
      >
        <Button
          title="ست خوراکی"
          onPress={() => {
            setListType('Edible');
            getList([22, 24]);
          }}
          variant={listType === 'Edible' ? 'primary' : 'secondary'}
          buttonStyle={{ width: '47%' }}
        />
        <Button
          buttonStyle={{ width: '47%' }}
          title="ست اسباب بازی"
          onPress={() => {
            setListType('toy');
            getList([27]);
          }}
          variant={listType === 'toy' ? 'primary' : 'secondary'}
        />
      </View>

      <List type="outline" list={list} isLoading={isLoading} />
    </View>
  );
}
