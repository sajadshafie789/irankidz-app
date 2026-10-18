import { createContext } from 'react';

export type User = {
  id: string;
  name: string;
  phoneNumber: string;
};

export type AppTheme = 'light' | 'dark';

export type AppContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingToken: any;
  isLoading: boolean;
  theme: AppTheme;
  isAuth: boolean | null;
  setIsAuth: (auth: boolean | null) => void;
  setUser: (user: User | null) => void;
  setIsLoading: (loading: boolean) => void;
  setTheme: (theme: AppTheme) => void;
  logout: () => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
