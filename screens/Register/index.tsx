import React, { useState } from 'react';
import { View } from 'react-native';

import { Text, Input, Button } from '../../components/core';

import { useAppNavigation } from '../../hooks/Navigation/useAppNavigation';
import { colors } from '../../utils/themes';
import styles from './styles';
import AuthLayout from '../../components/layouts/auth';
import API_ROUTES from '../../Api/api';
import { showToast } from '../../utils/toast';

const RegisterScreen = () => {
  const navigation = useAppNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');

  const [phoneError, setPhoneError] = useState<string>('');
  
  const HandleCodeAPI = () => {
    console.log('object');
    setIsLoading(true);
    API_ROUTES.sendCode({ mobile: phone })
      .then(res => {
        console.log(res);
        showToast('success', res.data.message);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handlegetCode = () => {
    setPhoneError('');

    let isValid = true;

    if (!/^09\d{9}$/.test(phone)) {
      setPhoneError('شماره موبایل معتبر وارد کنید');
      isValid = false;
    }

    if (!isValid) return;
    HandleCodeAPI();
  };

  return (
    <AuthLayout description="برای ثبت نام اطلاعات خود را وارد کنید">
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

        <Button
          title="دریافت کد"
          onPress={handlegetCode}
          fullWidth
          buttonStyle={styles.loginButton}
          loading={isLoading}
        />

        <View style={styles.registerRow}>
          <Text variant="body2" color={colors.textSecondary}>
            حساب کاربری دارید؟
          </Text>

          <Button
            title="ورود"
            variant="outline"
            onPress={() => navigation.navigate('Login')}
            buttonStyle={styles.registerButton}
            textStyle={styles.registerButtonText}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default RegisterScreen;
