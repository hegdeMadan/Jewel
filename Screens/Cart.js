import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image, ViewBase, ScrollView } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, } from '@expo/vector-icons';
import Search from '../components/search';
import Longcard from '../components/Longcard';
export default class Cart extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={{ alignSelf: 'flex-start', marginLeft: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="black" style={{ fontWeight: 'bold' }} />
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 15 }}>
                        <Text style={styles.title}>Cart</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Search />
                </View>
                <View>
                    <Text style={styles.title}>Your Cart</Text>
                </View>
                <ScrollView style={{ marginTop: 15, margin: 10 }}>
                    {/**using flatlist add below component inside it and pass props to components */}
                    <Longcard />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    title: {
        color: "black",
        fontSize: 24,
        marginLeft: 10,
        textAlign: 'left',
        fontWeight: 'bold'
    },
})
