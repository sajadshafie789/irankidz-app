import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../hooks/Navigation/type';

import LoginScreen from './Login';
import RegisterScreen from './Register';
import { useAppContext } from '../context/Appprovider';
import MainTabNavigator from '../navigation/MainTab';

// type RootNavigatorProps = {
//   isAuthenticated: boolean;
// };

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  const { isAuth } = useAppContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        key={isAuth ? 'authenticated' : 'guest'}
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {isAuth ? (
          <>
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
