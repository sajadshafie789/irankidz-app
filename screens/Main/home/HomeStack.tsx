import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './main';
import ProductDetails from './Detail';
import { HomeStackParamList } from '../../../hooks/Navigation/type';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={Home} />

      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
