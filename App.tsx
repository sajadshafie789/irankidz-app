import React, { useEffect } from 'react';
import AppProvider, { useAppContext } from './context/Appprovider';

import RootNavigator from './screens/RootStack';
import SplashScreen from './screens/Splash';
import Toast from 'react-native-toast-message';

const AppContent = () => {
  const { isCheckingToken } = useAppContext();

  return (
    <>
      {isCheckingToken ? <SplashScreen /> : <RootNavigator />}
      <Toast />
    </>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
