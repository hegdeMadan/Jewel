import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Top from '../components/Top'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';
export default class Login extends Component {
    render() {
        return (
                <View style={styles.screen}>
                    <View style={styles.container}>
                        <Text style={styles.s0text}>Enter Registered Number</Text>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.contain}>
                            <TouchableOpacity style={styles.opacity}>
                                <Text style={styles.num}>+91</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.opacity}>

                            </TouchableOpacity>
                            <TextInput style={styles.input} placeholder='XXXX-XXX-XXX' />
                        </View>
                        <TouchableOpacity style={styles.btn} >
                            <Text style={styles.sitext}>Get OTP</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={styles.low}>
                                <Text style={styles.txt0}>Not Recieved OTP?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.stext}>
                                        Resend
                           </Text>
                                </TouchableOpacity>
                                <Text style={styles.txt0}>  it!</Text>
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
    bottom: {
        height: "30%",
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
    },
    s0text: {
        fontWeight: "bold",
        fontSize: 20
    },
    input: {
        width: 200,
        height: 31,
        paddingLeft: 15,
        alignSelf: "center",
        marginLeft: 15,
        borderLeftWidth: 1,
        textAlign: 'center'
    },
    num: {
        fontSize: 20,
        color: "black",
        marginLeft: 10,
        fontWeight: 'bold',

    },
    opacity: {
        alignSelf: "center"
    },
    contain: {
        flexDirection: "row",
        width: screenWidth - 100,
        height: 60,
        alignSelf: "center",
        marginBottom: 25,
        borderWidth: 0.4,
        borderColor: '#707070',
        borderRadius: 2
    },
    container: {
        height: '65%',
        width: screenWidth,
        marginLeft: 30
    },
    txt0: {
        color: "#707070",
        fontSize: 15,
        textAlign: 'left'
    },
    low: {
        flexDirection: "row",
        alignSelf: 'center'
    },
    stext: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#7080ea'
    },
})
