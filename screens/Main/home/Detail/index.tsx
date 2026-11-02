import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import {
  Button,
  Image,
  Loading,
  Radio,
  Text,
} from '../../../../components/core';
import API_ROUTES from '../../../../Api/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../../hooks/Navigation/type';
import { Product } from '../../../../types/product';

import { BASE_IMG } from '../../../../Api/config';
import Counter from '../../../../components/core/Counter';
import Ionicons from '@react-native-vector-icons/ionicons';
import { showToast } from '../../../../utils/toast';
import TabBar from '../../../../components/screens/Details/TabBar';
import { styles } from './styles';
import HeaderProduct from '../../../../components/shared/HeaderProduct';

type Props = NativeStackScreenProps<HomeStackParamList, 'ProductDetails'>;

export default function ProductDetails({ route }: Props) {
  const [data, setData] = useState<Product | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(1);
  const [similarList, setSimilarList] = useState<Product[]>([]);
  const [attribute, setAttribute] = useState<number>(0);
  const getSimilarList = async (id: any) => {
    const response = await API_ROUTES.productList({
      subCategoryId: [10],
      notId: id,
      start: 0,
      limit: 10,
      list: 'similar',
      justStockCount: '',
      locationId: '',
      orderBy: '',
      sort: '',
    });

    setSimilarList(response.data.response);
  };

  const getData = async (link: string, id: string) => {
    setLoading(true);
    const response = await API_ROUTES.ProductDetail(link, id);
    getSimilarList(response.data.response[0].id);
    setData(response.data.response[0]);
    setLoading(false);
  };

  useEffect(() => {
    getData(route.params.link, route.params.productId);
  }, []);

  const handleUserLike = () => {
    API_ROUTES.UserFav(String(data?.id))
      .then(() => {
        setIsLiked(!isLiked);
        showToast(
          'success',
          !isLiked
            ? 'به لیست علاقه مندی اضافه شد'
            : 'از لیست علاقه مندی حذف شد',
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.listContent}
      data={[]}
      keyExtractor={(_, index) => String(index)}
      ListHeaderComponent={
        <View>
          {loading ? (
            <View style={styles.loadingContainer}>
              <Loading />
            </View>
          ) : (
            <View>
              <HeaderProduct title={data?.title} secendTitle={data?.title} />

              <View style={styles.productContent}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={{
                      uri: BASE_IMG + data?.fileImage.name,
                    }}
                    width="100%"
                    height={300}
                    resizeMode="contain"
                  />
                </View>

                <Text variant="h3" style={styles.productTitle}>
                  {data?.title}
                </Text>

                <Text variant="subtitle2" style={styles.productSubtitle}>
                  {data?.title}
                </Text>

                <Text variant="h3" style={styles.productPrice}>
                  {data?.price?.toLocaleString('fa-IR')} تومان
                </Text>

                {/* Add to cart */}
                <View style={styles.purchaseRow}>
                  <Button
                    buttonStyle={styles.addToCartButton}
                    title="افزودن به سبد خرید"
                  />

                  <View style={styles.counterWrapper}>
                    <Counter
                      initialValue={quantity}
                      min={1}
                      max={99}
                      onChange={setQuantity}
                    />
                  </View>
                </View>

                {/* Favorite and compare */}
                <View style={styles.actionRow}>
                  <Pressable
                    onPress={handleUserLike}
                    style={styles.actionButton}
                  >
                    <Ionicons
                      name={isLiked ? 'heart' : 'heart-outline'}
                      size={28}
                      color="#f5583e"
                    />
                  </Pressable>

                  <Pressable
                    onPress={handleUserLike}
                    style={styles.actionButton}
                  >
                    <Ionicons name="repeat-outline" size={28} color="#f5583e" />
                  </Pressable>
                </View>

                {data?.productStock.length ? (
                  <View style={styles.stockContainer}>
                    {data?.productStock.map((v, i) => (
                      <View key={v.id}>
                        <Radio
                          label={v.subAttribute?.faName}
                          selected={attribute === i}
                          onPress={() => setAttribute(i)}
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  ''
                )}
              </View>

              {/* Tabs */}
              <TabBar
                title={data?.title}
                productID={data?.id}
                productAttribute={data?.productAttribute}
              />

              {/* Similar products */}
              <View style={styles.similarSection}>
                <Text variant="h2" style={styles.similarTitle}>
                  محصولات مشابه
                </Text>

                <FlatList
                  data={similarList}
                  keyExtractor={item => String(item.id)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.listContainer}
                  renderItem={({ item }) => (
                    <Pressable
                      style={styles.containerCard}
                      onPress={() => getData(item.link, String(item.id))}
                    >
                      <Image
                        source={{
                          uri: BASE_IMG + item.fileImage.name,
                        }}
                        width={150}
                        height={150}
                        resizeMode="cover"
                      />

                      <Text variant="subtitle2">{item.title}</Text>

                      <Text variant="h4" style={styles.productPrice}>
                        {item.price.toLocaleString('fa-IR')} تومان
                      </Text>

                      <Button title="افزودن به سبد خرید" variant="outline" />
                    </Pressable>
                  )}
                />
              </View>
            </View>
          )}
        </View>
      }
      ListEmptyComponent={<View style={styles.emptyContainer} />}
    />
  );
}
