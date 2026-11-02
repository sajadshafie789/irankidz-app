import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '../../../components/core';
import { Product } from '../../../types/product';
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
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const getData = () => {
    setProcessMode('loading');
    API_ROUTES.FavoriteList()
      .then(res => {
        res.data.response.length >= 0
          ? setProcessMode('data')
          : setProcessMode('empty');
        setData(res.data.response);
      })
      .catch(err => {
        setProcessMode('error');
        console.log(err);
      });
  };
  const onCancelFav = (id: number) => {
    setLoadingButton(true);
    API_ROUTES.UserFav(String(id))
      .then(() => {
        showToast('success', 'محصول از لیست علاقه مندی حدف شد');
        setLoadingButton(false);
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
    <View style={{ flex: 1, backgroundColor: colors.white }}>
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
                  loadingButton={loadingButton}
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
