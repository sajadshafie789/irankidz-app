import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../../../components/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../../context/Appprovider';
type Props = {};

export default function Profile({}: Props) {
  const { setIsAuth } = useAppContext();
  return (
    <View style={{ gap: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <Text>پروفایل</Text>
      </View>
      <Button
        title="خروج"
        onPress={async () => {
          await AsyncStorage.removeItem('access_token');
          setIsAuth(false);
        }}
      />
    </View>
  );
}
