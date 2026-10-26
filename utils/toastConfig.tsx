import React from 'react';
import { View, StyleSheet } from 'react-native';
import Toast, {
  type ToastConfig,
  type ToastConfigParams,
} from 'react-native-toast-message';
import { Text } from '../components/core';

const CustomToast = ({ text1, text2, type }: ToastConfigParams<any>) => {
  const isSuccess = type === 'success';
  const isError = type === 'error';

  const accentColor = isSuccess ? '#22C55E' : isError ? '#EF4444' : '#3B82F6';

  return (
    <View style={styles.container}>
      <View style={[styles.accent, { backgroundColor: accentColor }]} />

      <View style={styles.content}>
        {!!text1 && (
          <Text variant="subtitle2" color="#222222" style={styles.title}>
            {text1}
          </Text>
        )}

        {!!text2 && (
          <Text variant="caption" color="#555555" style={styles.message}>
            {text2}
          </Text>
        )}
      </View>
    </View>
  );
};

const toastConfig: ToastConfig = {
  success: props => <CustomToast {...props} />,
  error: props => <CustomToast {...props} />,
  info: props => <CustomToast {...props} />,
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  accent: {
    width: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  title: {
    width: '100%',
    textAlign:"left"
  },
  message: {
    width: '100%',
    marginTop: 3,
    textAlign:"left"
  },
});

export default toastConfig;
