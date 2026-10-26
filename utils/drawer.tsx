import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer';

// این دو صفحه را با مسیر واقعی صفحه‌هایت جایگزین کن

import { Text } from '../components/core';
import { colors } from './themes';
import Home from '../screens/Main/home/main';
import Profile from '../screens/Main/profile';

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.header}>
        <Text variant="h4" color={colors.white}>
          ایران‌کیدز
        </Text>

        <Text variant="caption" color={colors.white}>
          دنیای رنگارنگ کودکان
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        swipeEnabled: true,
        drawerStyle: {
          width: 280,
          backgroundColor: colors.surface,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: {
          fontFamily: 'IRANYekan-Medium',
          fontSize: 14,
          textAlign: 'right',
        },
        drawerItemStyle: {
          borderRadius: 10,
          marginHorizontal: 8,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'صفحه اصلی' }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'حساب کاربری' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 28,
    marginBottom: 12,
    gap: 6,
  },
});
