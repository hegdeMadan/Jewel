import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TextInput } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Card from '../components/Card';
export default class Orders extends Component {
    Card = () => {
        return (
            <View style={styles.scree}>
                <View style={styles.card}>
                    <View style={styles.imgtem}>
                    </View>
                    <View>
                        <View style={{ marginTop: 5, justifyContent: 'space-around', flexDirection: "row" }}>
                            <Text style={styles.txt1}>Minimalist Chair for {'\n'} Living Room</Text>
                        </View>
                        <View style={{ marginTop: 15, flexDirection: "row" }}>
                            <View style={styles.txi}>
                                <Text style={styles.tx}>$12.99</Text>
                            </View>
                        </View>
                        <View style={{ margin: 5, flexDirection: "row" }}>
                            <FontAwesome name="circle" size={18} color="red" />
                            <Text style={styles.txt}>Orders</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={{ alignSelf: 'flex-start', marginLeft: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="black" style={{ fontWeight: 'bold' }} />
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 15, flexDirection: 'row' }}>
                        <Text style={styles.title}>Orders</Text>
                    </View>
                </View>
                <this.Card />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 35
    },
    scree: {
        margin: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    title: {
        color: "black",
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        width: screenWidth - 20,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 6,
        flexDirection: "row"
    },
    imgtem: {
        width: 120,
        height: 130,
        backgroundColor: "#ffc272",
        borderRadius: 15
    },
    txt: {
        color: "black",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5
    },
    txt1: {
        color: "black",
        fontSize: 18,
        margin: 2
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
    tx: {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        fontWeight: 'bold'
    },
})
