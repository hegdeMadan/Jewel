import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export default class Longcard extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.card}>
                    <View style={styles.imgtem}>
                    </View>
                    <View>
                        <View style={{ marginTop: 5, justifyContent: 'space-around', flexDirection: "row" }}>
                            <Text style={styles.txt}>Minimalist Chair for {'\n'} Living Room</Text>
                            <View style={{}}>
                                <AntDesign name="hearto" size={24} color="#707070" style={{ textAlign: "right" }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 15, flexDirection: "row" }}>
                            <View style={styles.txi}>
                                <Text style={styles.txt1}>$12.99</Text>
                                <View style={styles.btn}>
                                    <TouchableOpacity style={styles.opacity}>
                                        <AntDesign name="plus" size={20} color="black" />
                                    </TouchableOpacity>
                                    <Text>1</Text>
                                    <TouchableOpacity>
                                        <AntDesign name="minus" size={20} color="black" />
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
    card: {
        width: screenWidth - 20,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 6,
        flexDirection: "row"
    },
    imgtem: {
        width:120,
        height: 130,
        backgroundColor: "#ffc272",
        borderRadius: 15
    },
    txt: {
        color: "black",
        fontSize: 18,
        margin: 5
    },
    title: {
        color: "black",
        fontSize: 15,
        marginLeft: 10,
        textAlign: 'left'
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
    opacity: {

    }
})
