import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, Loading } from '..';

import { PropsType } from './type';
import EmptyData from '../../shared/EmptyData';

export default function ProcessLayoutData(props: PropsType) {
  const {
    children,
    state,
    containerStyle,
    emptyMessage,
    infiniteLoading = false,
    errorButtonMessage = 'تکمیل اطلاعات',
    loading = false,
    errorCallBack,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {state === 'data' && children}

      {infiniteLoading && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Loading />
        </View>
      )}

      {state === 'empty' && <EmptyData message={emptyMessage} />}

      {state === 'error' && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>اطلاعات این بخش تکمیل نشده است.</Text>

          <Button
            title={errorButtonMessage}
            loading={loading}
            onPress={errorCallBack}
            variant="outline"
          />
        </View>
      )}

      {state === 'loading' && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  errorText: {
    color: '#DC2626',
    marginBottom: 16,
    textAlign: 'center',
  },

  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});
