import React from 'react';
import AppProvider, { useAppContext } from './context/Appprovider';

import RootNavigator from './screens/RootStack';
import SplashScreen from './screens/Splash';
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import toastConfig from './utils/toastConfig';
const AppContent = () => {
  const { isCheckingToken } = useAppContext();

  return <>{isCheckingToken ? <SplashScreen /> : <RootNavigator />}</>;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppContent />
        <Toast config={toastConfig} />
      </AppProvider>
    </SafeAreaProvider>
  );
}
