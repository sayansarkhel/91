import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

import HomeScreen from './screens/homescreen';
import Pricelist from './screens/pricelist';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default function App() {
  return (
    <AppContainer />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  }, 
 
});
const AppSwitchNavigator = createSwitchNavigator(
  {
    home: {
      screen: HomeScreen
    },
    price: {
      screen: Pricelist
    }
  },
  {
    initialRouteName: "home"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
