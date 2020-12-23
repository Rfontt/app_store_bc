import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './src/context/auth';
import Router from './src/navigation/stacknavigation';
import { useFonts, 	Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo';

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_700Bold,
		Roboto_400Regular
	});

	if (!fontsLoaded) {
		return <AppLoading />
	}

  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
