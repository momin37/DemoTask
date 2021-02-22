import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Explore from './app/screens/explore/Explore';
import Profile from '../demo/app/screens/profile/Profile'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
      <NavigationContainer>
      <AppNavigator></AppNavigator>
      </NavigationContainer>



  );
}
