import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OTP from './Screens/OTP';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Longcard from './components/Longcard';
import Address from './Screens/Address';
import Search from './components/search';
import Cart from './Screens/Cart';
import Wishlist from './Screens/Wishlist';
import Profile from './Screens/Profile';
import Orders from './Screens/Orders';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import IndexNavigator from './Navigation/Tabnav';
import Stacknav from './Navigation/Stacknav';
import Authstack from './Navigation/Authstack';
export default function App() {
  return (
    <NavigationContainer>
      <IndexNavigator />
      {/*<Stacknav />*/}
      {/**<Authstack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
