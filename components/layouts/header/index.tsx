import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { SearchInput, Text } from '../../core';
import { colors } from '../../../utils/themes';
import LogoImage from '../../shared/LogoImage';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useAppNavigation } from '../../../hooks/Navigation/useAppNavigation';
import { DrawerActions } from '@react-navigation/native';

type HomeHeaderProps = {
  onSearch?: (value: string) => void;
  onCartPress?: () => void;

  cartCount?: number;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onCartPress,
  cartCount = 0,
}) => {
  const [search, setSearch] = React.useState('');
  const navigation = useAppNavigation();
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo and actions */}

        <View style={styles.logo}>
          <LogoImage width={50} height={50} />
        </View>
        <View style={{ width: '60%' }}>
          <SearchInput value="" onChangeText={e => console.log(e)} />
        </View>
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
            navigation.dispatch(DrawerActions.openDrawer());
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
