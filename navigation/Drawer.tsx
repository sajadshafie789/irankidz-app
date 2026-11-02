import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabNavigator from './MainTab';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{
          title: 'صفحه اصلی',
          drawerLabel: 'صفحه اصلی',
        }}
      />
    </Drawer.Navigator>
  );
}