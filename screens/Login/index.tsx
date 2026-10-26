import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, Input, Button } from '../../components/core';

import { useAppNavigation } from '../../hooks/Navigation/useAppNavigation';
import { colors } from '../../utils/themes';
import styles from './styles';
import AuthLayout from '../../components/layouts/auth';
import API_ROUTES from '../../Api/api';
import { useAppContext } from '../../context/Appprovider';

const LoginScreen = () => {
  const navigation = useAppNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsAuth } = useAppContext();
  const [phoneError, setPhoneError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const HandleLoginApi = () => {
    setIsLoading(true);
    API_ROUTES.login({ username: phone, password: password })
      .then(async res => {

        setIsLoading(false);
        const token: string = res.data.response.accessToken;
        await AsyncStorage.setItem('access_token', token);
        setIsAuth(true);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleLogin = () => {
    setPhoneError('');
    setPasswordError('');

    let isValid = true;

    if (!/^09\d{9}$/.test(phone)) {
      setPhoneError('شماره موبایل معتبر وارد کنید');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('رمز عبور را وارد کنید');
      isValid = false;
    }

    if (!isValid) return;
    HandleLoginApi();
  };

  return (
    <AuthLayout>
      <View style={styles.form}>
        <Input
          label="شماره موبایل"
          placeholder="09123456789"
          value={phone}
          onChangeText={(value: string) => {
            setPhone(value);
            setPhoneError('');
          }}
          keyboardType="phone-pad"
          maxLength={11}
          error={phoneError}
          textAlign="right"
        />

        <View style={styles.passwordContainer}>
          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChangeText={(value: string) => {
              setPassword(value);
              setPasswordError('');
            }}
            secureTextEntry
            error={passwordError}
            textAlign="right"
          />
        </View>

        <Button
          title="ورود به حساب"
          onPress={handleLogin}
          fullWidth
          buttonStyle={styles.loginButton}
          loading={isLoading}
        />

        <View style={styles.registerRow}>
          <Text variant="body2" color={colors.textSecondary}>
            حساب کاربری نداری؟
          </Text>

          <Button
            title="ثبت‌نام"
            variant="outline"
            onPress={() => navigation.navigate('Register')}
            buttonStyle={styles.registerButton}
            textStyle={styles.registerButtonText}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
