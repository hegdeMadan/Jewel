import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import OTP from '../Screens/OTP'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class Authstack extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="otp" component={OTP} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="welcome" component={Welcome} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
