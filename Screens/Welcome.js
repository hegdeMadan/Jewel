import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, Button, TouchableOpacity, SafeAreaView, } from 'react-native'
import Top from '../components/Top';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Welcome extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <View style={styles.screen}>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.btn}  >
                            <Text style={styles.sitext}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={styles.end}>
                            <Text style={styles.txt}>Don't Have account? Please </Text>
                            <TouchableOpacity>
                                <Text style={styles.stext}> Signup</Text>
                            </TouchableOpacity>
                            <Text style={styles.txt}> to Create one</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    img: {

    },
    contain: {

    },
    bottom: {
        justifyContent: "center",
        position: 'absolute',
        bottom: 30,
        alignSelf: "center"

    },
    end: {
        flexDirection: "row",
        alignSelf: 'center'
    },
    txt: {
        color: "#707070",
        fontSize: 15,
        textAlign: 'center'
    },
    stext: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#7080ea'
    },
    btn: {
        color: "white",
        backgroundColor: "#7080ea",
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: screenWidth - 100,
        borderRadius: 5
    },
    sitext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
