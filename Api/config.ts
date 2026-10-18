import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showToast } from '../utils/toast';

const BASE_URL = 'https://irankidz.com/api/v0/';
export const BASE_IMG = 'https://api.irankidz.com/images/';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Attach token to every request
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError<{ message?: string; errors?: unknown }>) => {
    const status = error.response?.status;
    const serverMessage: string | undefined = error.response?.data?.message;

    if (!error.response) {
      showToast(
        'error',
        error.code === 'ECONNABORTED'
          ? 'زمان درخواست به پایان رسید.'
          : 'اتصال به سرور برقرار نشد.',
      );
    } else if (status === 401) {
      showToast('error', serverMessage as string);
    } else if (status === 403) {
      showToast('error', serverMessage as string);
    } else if (status === 404) {
      showToast('error', serverMessage as string);
    } else if (status === 422) {
      showToast('error', serverMessage as string);
    } else if (status !== undefined && status >= 500) {
      showToast('error', 'خطایی در سرور رخ داده است.');
    } else {
      showToast('error', serverMessage || 'در انجام درخواست خطایی رخ داد.');
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
