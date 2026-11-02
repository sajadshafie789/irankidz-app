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
import HeaderProduct from '../../../components/shared/HeaderProduct';
import HomeHeader from '../../../components/layouts/header';

const PAGE_SIZE = 10;

export default function ProductListScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const requestingRef = useRef(false);

  const fetchProducts = useCallback(
    async (pageNumber: number, refresh = false) => {
      if (requestingRef.current) return;
      if (!refresh && !hasMore && pageNumber !== 1) return;

      requestingRef.current = true;
      setLoading(true);
      setError('');

      try {
        const response = await API_ROUTES.productList({
          start: (pageNumber - 1) * PAGE_SIZE,
          limit: PAGE_SIZE,
          justStockCount: '',
          locationId: '',
          orderBy: '',
          notId: 0,
          sort: '',
        });

        const newProducts = response.data.response;
        setProducts(previous => {
          const existingIds = new Set(previous.map(product => product.id));

          const uniqueProducts = newProducts.filter(
            product => !existingIds.has(product.id),
          );

          return refresh || pageNumber === 1
            ? newProducts
            : [...previous, ...uniqueProducts];
        });

        setPage(pageNumber);

        setHasMore(
          response.data.next !== undefined
            ? response.data.next !== null
            : newProducts.length === PAGE_SIZE,
        );
      } catch (err: unknown) {
        console.log(err);

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
      <View style={{ paddingHorizontal: 8 }}>
        <HomeHeader />
      </View>
      <HeaderProduct
        title="لیست محصولات ایران کیدز"
        secendTitle="فروشگاه ایران کیدز"
      />

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        style={{ marginTop: 16 }}
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
