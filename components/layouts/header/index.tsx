import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { SearchInput, Text } from '../../core';
import { colors } from '../../../utils/themes';
import LogoImage from '../../shared/LogoImage';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useAppNavigation } from '../../../hooks/Navigation/useAppNavigation';


type HomeHeaderProps = {
  onSearch?: (value: string) => void;
  onCartPress?: () => void;

  cartCount?: number;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onCartPress,
  cartCount = 0,
}) => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo and actions */}

        <Pressable
          style={styles.logo}
          onPress={() => navigation.navigate('Home')}
        >
          <LogoImage width={50} height={50} />
        </Pressable>
        <View style={{ width: '60%' }}></View>
        <Pressable
          onPress={onCartPress}
          style={styles.iconButton}
          accessibilityLabel="سبد خرید"
        >
          <Ionicons name="cart-sharp" size={26} />

          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text variant="caption" color={colors.white} align="center">
                {cartCount > 99 ? '99+' : cartCount}
              </Text>
            </View>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('object');
          }}
        >
          <Ionicons name="menu" size={26} />
        </Pressable>
        {/* Search */}
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
