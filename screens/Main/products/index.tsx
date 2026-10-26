import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import axios from 'axios';

import type { Product } from '../../../types/product';
import { colors } from '../../../utils/themes';
import styles from './styles';
import API_ROUTES from '../../../Api/api';
import { BASE_IMG } from '../../../Api/config';
import { ProductCard, Text } from '../../../components/core';

import { showToast } from '../../../utils/toast';

const PAGE_SIZE = 10;

export default function ProductListScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  // جلوگیری از درخواست تکراری برای یک صفحه
  const requestingRef = useRef(false);

  const fetchProducts = useCallback(
    async (pageNumber: number, refresh = false) => {
      if (requestingRef.current) return;
      if (!refresh && !hasMore && pageNumber !== 1) return;

      requestingRef.current = true;
      setLoading(true);
      setError('');

      try {
        const response = await API_ROUTES.productList(pageNumber, PAGE_SIZE);
        // const response = await axios.get<ProductListResponse>(API_URL, {
        //   params: {
        //     page: pageNumber,
        //     page_size: PAGE_SIZE,
        //   },
        // });
        console.log(response);
        const newProducts = response.data.response;

        setProducts(previous =>
          refresh || pageNumber === 1
            ? newProducts
            : [
                ...previous,
                ...newProducts.filter(
                  item => !previous.some(product => product.id === item.id),
                ),
              ],
        );

        setPage(pageNumber);

        setHasMore(
          response.data.next !== undefined
            ? response.data.next !== null
            : newProducts.length === PAGE_SIZE,
        );
      } catch (err: unknown) {
        console.log(
          'Products API error:',
          axios.isAxiosError(err)
            ? {
                status: err.response?.status,
                data: err.response?.data,
                message: err.message,
              }
            : err,
        );

        setError('دریافت محصولات با خطا مواجه شد.');
      } finally {
        requestingRef.current = false;
        setLoading(false);
        setRefreshing(false);
      }
    },
    [hasMore],
  );

  useEffect(() => {
    fetchProducts(1);
  }, [fetchProducts]);

  const loadMore = () => {
    if (!loading && hasMore && !requestingRef.current) {
      fetchProducts(page + 1);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setHasMore(true);
    fetchProducts(1, true);
  };
  const handleAddToCart = (product: Product) => {
    showToast('success', 'محصول به سبد خرید افزوده شد', 'موفق');
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      imageBaseUrl={BASE_IMG}
      onAddToCart={handleAddToCart}
    />
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <Text style={styles.header} variant="subtitle1">
          محصولات
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          loading && products.length > 0 ? (
            <ActivityIndicator
              size="large"
              color={colors.primary}
              style={styles.loader}
            />
          ) : error && products.length > 0 ? (
            <Text style={styles.error}>{error}</Text>
          ) : null
        }
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : error ? (
            <Text style={styles.error}>{error}</Text>
          ) : (
            <Text style={styles.empty}>محصولی یافت نشد.</Text>
          )
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
