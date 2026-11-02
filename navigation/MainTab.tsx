import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootTabParamList } from '../hooks/Navigation/type';
import { colors } from '../utils/themes';
import ProductListScreen from '../screens/Main/products';
import FavoritesScreen from '../screens/Main/favorite';
import ProfileScreen from '../screens/Main/profile';
import HomeStackNavigator from '../screens/Main/home/HomeStack';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function MainTabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          marginBottom: 8,
          height: 60 + insets.bottom,
          paddingBottom: Math.max(insets.bottom, 8),
          paddingTop: 8,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },

        tabBarLabelStyle: {
          fontFamily: 'IRANYekan-Bold',
          fontSize: 11,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Products: focused ? 'cart-sharp' : 'cart-outline',
            Favorites: focused ? 'heart' : 'heart-outline',
            Profile: focused ? 'person' : 'person-outline',
          } as const;
          console.log(route);
          return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarLabel: 'خانه' }}
      />

      <Tab.Screen
        name="Products"
        component={ProductListScreen}
        options={{ tabBarLabel: 'محصولات' }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarLabel: 'علاقه‌مندی‌ها' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'پروفایل' }}
      />
    </Tab.Navigator>
  );
}
