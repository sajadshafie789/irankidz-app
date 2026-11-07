import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '../../../components/core';

import API_ROUTES from '../../../Api/api';
import { FavProductProps, processStateProps } from '../../../types/types';
import ProcessLayoutData from '../../../components/core/ProcessLoading';
import HeaderProduct from '../../../components/shared/HeaderProduct';
import FavCard from '../../../components/shared/FavCard';
import { colors } from '../../../utils/themes';
import { showToast } from '../../../utils/toast';
import HomeHeader from '../../../components/layouts/header';

type Props = {};

export default function Facorite({}: Props) {
  const [data, setData] = useState<FavProductProps[]>([]);
  const [processMode, setProcessMode] = useState<processStateProps>('loading');

  const getData = () => {
    setProcessMode('loading');
    API_ROUTES.FavoriteList()
      .then(res => {
        const result = res.data.response.map((v: any) => {
          return { ...v, loading: false };
        });
        res.data.response.length >= 0
          ? setProcessMode('data')
          : setProcessMode('empty');
        setData(result);
      })
      .catch(err => {
        setProcessMode('error');
        console.log(err);
      });
  };
  const onCancelFav = (id: number) => {
    const updateData = data.map(v => {
      return { ...v, loading: id === v.id };
    });
    setData(updateData);
    API_ROUTES.UserFav(String(id))
      .then(() => {
        showToast('success', 'محصول از لیست علاقه مندی حدف شد');

        getData();
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.white, paddingBottom: 120 }}
    >
      <View style={{ paddingHorizontal: 8 }}>
        <HomeHeader />
      </View>
      <HeaderProduct
        title="لیست علاقه مندی های من"
        secendTitle="فروشگاه ایران کیدز"
      />
      <ProcessLayoutData
        state={processMode}
        emptyMessage="لیست علاقه مندی شما خالی است"
        errorCallBack={() => getData()}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
            borderBottomWidth: 1,
            borderColor: colors.border,
            paddingVertical: 16,
          }}
        >
          <Text variant="h5">محصول</Text>
          <Text variant="h5">قیمت</Text>
          <Text variant="h5">وضعیت موجودی</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 160, paddingHorizontal: 8 }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <FavCard
                  loadingButton={item.loading}
                  onAction={() => onCancelFav(item.id)}
                  image={item.product.fileImage.name}
                  price={item.product.price}
                  title={item.product.title}
                />
              </View>
            );
          }}
        />
      </ProcessLayoutData>
    </View>
  );
}
