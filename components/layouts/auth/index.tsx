import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { colors } from '../../../utils/themes';
import styles from './styles';
import { Image, Text } from '../../core';

type Props = {
  children: ReactNode;
  description?: string;
};

export default function AuthLayout({
  children,
  description = 'برای ورود به حساب کاربری خودت اطلاعاتت رو وارد کن.',
}: Props) {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 12,
            }}
          >
            <Image
              source={require('../../../assets/image/logo.png')}
              width={120}
              height={120}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              variant="h2"
              textStyle={{
                textAlign: 'center',
                marginBottom: 10,
              }}
            >
              خوش اومدی!
            </Text>

            <Text
              variant="body2"
              color={colors.textSecondary}
              textStyle={{
                textAlign: 'center',
                lineHeight: 24,
                marginBottom: 36,
              }}
            >
              {description}
            </Text>
            {children}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
