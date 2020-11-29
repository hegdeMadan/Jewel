import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import Top from '../components/Top'

export default class OTP extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.main}>
                    <Text style={styles.txt}>Please Enter OTP</Text>
                    <Text style={styles.txt1}>We have sent OTP to your Registered mobile Number Please Check Inbox</Text>
                </View>
                <View style={styles.btm}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    txt: {
        color: "#383838",
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 25

    },
    input: {
        borderBottomWidth: 1,
        width: 50,
        alignSelf: 'center',
        marginRight: 5
    },
    main: {
        alignSelf: 'center',
        paddingTop: 50
    },
    btm: {
        flexDirection: "row",
        alignSelf: 'center',
        flex: 1
    },
    txt1: {
        color: "#383838",
        fontSize: 18,
        textAlign: 'center',
    }
})
