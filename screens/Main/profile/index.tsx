import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../../../components/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../../context/Appprovider';
import HeaderProduct from '../../../components/shared/HeaderProduct';
import { useAppNavigation } from '../../../hooks/Navigation/useAppNavigation';
type Props = {};

export default function Profile({}: Props) {
  const { setIsAuth } = useAppContext();
  const navigation = useAppNavigation();
  return (
    <View>
      <HeaderProduct title="پروفایل" secendTitle="فروشگاه ایران کیدز" />
      <View style={{ gap: 8, padding: 8 }}>
        <Text variant="h5" style={{ marginBottom: 12 }}>
          حساب من
        </Text>
        <Text variant="h5" style={{ marginBottom: 12 }}>
          سفارشات من
        </Text>
        <Text variant="h5" style={{ marginBottom: 12 }}>
          آدرس های من
        </Text>
        <Text variant="h5" style={{ marginBottom: 12 }}>
          درخواست های من
        </Text>
        <Button
          title="خروج"
          variant="outline"
          onPress={async () => {
            await AsyncStorage.removeItem('access_token');
            setIsAuth(false);
          }}
        />
      </View>
    </View>
  );
}
