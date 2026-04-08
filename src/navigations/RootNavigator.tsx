import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const token = useSelector((state: RootState) => state.auth.token);

  const [isLoading, setIsLoading] = useState(true); // 👈 controls splash

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : !token ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      ) : (
        <Stack.Screen name="Main" component={MainTabNavigator} />
      )}

    </Stack.Navigator>
  );
}