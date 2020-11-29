import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image, ViewBase, ScrollView } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Search from '../components/search';
import Wishcard from '../components/wishcard';

export default class Wishlist extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={{ alignSelf: 'flex-start', marginLeft: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="black" style={{ fontWeight: 'bold' }} />
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 15, flexDirection: 'row' }}>
                    <Text style={styles.title}>Wishlist</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Search />
                </View>
                <View style={{ margin: 15 }}>
                    <Text style={styles.title}>Wishlist</Text>
                </View>
                <ScrollView style={{ marginTop: 15, marginLeft: 15 }}>
                    {/**add th below component inside a flatlist and pass props to components */}
                    <Wishcard />
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
    icon: {
        fontWeight: '100',
        marginRight: 15,
        opacity: 0.5
    },
    card: {
        width: screenWidth - 20,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 6,
        flexDirection: "row"
    },
    imgtem: {
        width: screenWidth - 280,
        height: 130,
        backgroundColor: "#ffc272",
        borderRadius: 15
    },
    txt1: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    btn: {
        color: "white",
        backgroundColor: "#cecdcc",
        height: 20,
        width: 80,
        borderRadius: 5,
        flexDirection: 'row',
        marginLeft: 40,
        justifyContent: 'space-around'
    },
    txi: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})
