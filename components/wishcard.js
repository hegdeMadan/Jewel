import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export default class Wishcard extends Component {
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.imgtem}>
                    </View>
                    <View>
                        <View style={{ marginTop: 5, justifyContent: 'space-around', flexDirection: "row" }}>
                            <Text style={styles.txt2}>Minimalist Chair for {'\n'} Living Room</Text>
                            <View style={{}}>
                                <AntDesign name="delete" size={24} color="black" style={{ opacity: 0.7 }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 45, flexDirection: "row" }}>
                            <View style={styles.txi}>
                                <Text style={styles.txt1}>$12.99</Text>
                                <View style={styles.btn}>
                                    <TouchableOpacity style={styles.btn1}>
                                        <Text style={styles.txt}>Add to cart</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
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
        width: 120,
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
    btn1: {
        color: "white",
        backgroundColor: "#05baba",
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        borderRadius: 5
    },
    txt: {
        color: "white",
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    t: {
        flexDirection: 'row',

    }
})
