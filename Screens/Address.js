import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TextInput } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export default class Address extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.Address}>
                    <View >
                        <View style={styles.contain}>
                            <TextInput style={styles.input} placeholder='First Name' />
                        </View>
                        <View style={styles.contain}>

                            <TextInput style={styles.input} placeholder='Last Name' />
                        </View>
                        <View style={styles.contain}>

                            <TextInput style={styles.input} placeholder='Phone Number' />
                        </View>
                        <View style={styles.contain}>

                            <TextInput style={styles.input} placeholder='Street/ House Name' />
                        </View>
                        <View style={styles.contain}>

                            <TextInput style={styles.input} placeholder='Address' />
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <View style={styles.contain1}>

                                <TextInput style={styles.input} placeholder='State' />
                            </View>
                            <View style={styles.contain1}>
                                <TextInput style={styles.input} placeholder='PIN' />
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={styles.contain2}>
                            <TouchableOpacity style={styles.btn} >
                                <Text style={styles.sitext}>Proceed to Pay</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Address: {
        width: screenWidth,
        marginTop: 20
    },
    contain: {
        flexDirection: "row",
        backgroundColor: '#fff',
        margin: 4,
        width: screenWidth - 100,
        height: 70,
        alignSelf: "center",
        borderRadius: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#c5c5c5",
        paddingLeft: 5
    },
    contain1: {
        flexDirection: "row",
        backgroundColor: '#fff',
        width: screenWidth - 250,
        height: 50,
        alignSelf: "center",
        borderRadius: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "#c5c5c5",
        paddingLeft: 5,
        margin: 2
    },
    btn: {
        color: "white",
        backgroundColor: "#7080ea",
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        width: screenWidth - 100,
        borderRadius: 5,
        marginTop: 15
    },
    sitext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
