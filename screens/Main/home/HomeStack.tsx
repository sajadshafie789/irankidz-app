import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './main';
import ProductDetails from './Detail';
import { HomeStackParamList } from '../../../hooks/Navigation/type';
import { View } from 'react-native';
import HomeHeader from '../../../components/layouts/header';
import { colors } from '../../../utils/themes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ paddingHorizontal: 8 }}>
        <HomeHeader />
      </View>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </View>
  );
}
