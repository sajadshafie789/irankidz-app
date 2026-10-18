// context/Appprovider.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'access_token';

type AppContextType = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckingToken: boolean;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        setIsAuth(Boolean(token));
      } catch (error) {
        console.error('Failed to read access token:', error);
        setIsAuth(false);
      } finally {
        setTimeout(() => {
          setIsCheckingToken(false);
        }, 2000);
      }
    };

    bootstrap();
  }, []);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, isCheckingToken }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }

  return context;
};
