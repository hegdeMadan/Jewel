import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../Screens/Orders';
import Address from '../Screens/Address';
const Stack = createStackNavigator();

export default class Stacknav extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="orders" component={Orders} />
                <Stack.Screen name="address" component={Address} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
