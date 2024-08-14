import React, { useEffect } from 'react';
import '@/globals/global.css'
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';

import { RobotoSlab_300Light, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_700Bold, useFonts } from '@expo-google-fonts/roboto-slab';

import Routes from '@/routes';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, error] = useFonts({
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
  
      <StatusBar style='light' translucent />
      <Routes />
 
     
    </>

  );
}