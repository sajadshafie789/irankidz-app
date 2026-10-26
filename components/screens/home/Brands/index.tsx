import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import API_ROUTES from '../../../../Api/api';
import { Product } from '../../../../types/product';

import { Image, Loading, Text } from '../../../core';
import { styles } from './styles';
import { BASE_IMG } from '../../../../Api/config';

type Props = {};

export default function BrandList({}: Props) {
  const [list, setList] = useState<Product[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const getList = async () => {
    setLoading(true);
    const response = await API_ROUTES.BrandList();
    setLoading(false);
    setList(response.data.response);
  };

  useEffect(() => {
    getList();
  }, []);
  console.log(list);
  return (
    <View style={{ marginTop: 60 }}>
      <Text variant="h3"> برند های معروف</Text>

      <View style={{ marginTop: 24 }}>
        {isLoading ? (
          <View
            style={{
              width: '100%',
              height: 300,
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
              return (
                <View style={styles.cardContainer}>
                  <Image
                    source={{
                      uri: BASE_IMG + item.fileImage.name,
                    }}
                    width={100}
                    height={100}
                    resizeMode="contain"
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
