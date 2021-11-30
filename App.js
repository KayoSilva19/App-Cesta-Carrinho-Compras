import React from 'react';
import { View, StatusBar, SafeAreaView,  } from 'react-native';
import Cesta from './src/pages/Cestas';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import mock from './src/mocks/cesta';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#DDEBE0" />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

