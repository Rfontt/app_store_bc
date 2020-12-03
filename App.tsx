import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './src/context/auth';
import Router from './src/navigation/stacknavigation';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
