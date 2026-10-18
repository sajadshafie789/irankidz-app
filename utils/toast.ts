import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

export const showToast = (type: ToastType, message: string, title?: string) => {
  return Toast.show({
    type,
    text1:
      title ??
      (type === 'error' ? 'خطا' : type === 'success' ? 'موفق' : 'اطلاع'),
    text2: message,
    
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
  });
};
