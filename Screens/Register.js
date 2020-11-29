import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export default class Register extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Text style={styles.sitext}>SignUp!</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.contain}>
                        <TouchableOpacity style={styles.opacity}>
                            <AntDesign name="user" size={24} color="black" style={{ fontWeight: 'bold' }} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder='Username' />
                    </View>
                    <View style={styles.contain}>
                        <TouchableOpacity style={styles.opacity}>
                            <Feather name="phone" size={24} color="black" style={{ fontWeight: 'bold' }} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder='Phone Number' />
                    </View>
                    <View style={styles.contain}>
                        <TouchableOpacity style={styles.opacity}>
                            <MaterialCommunityIcons name="email-open-outline" size={24} color="black" style={{ fontWeight: 'bold' }} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder='Email' />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.stext}>Sign Up</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.txt}>By Signing up you agree our Privacy Policy</Text>
                        <View style={styles.low}>
                            <Text style={styles.txt}>Already Have Account,</Text>
                            <TouchableOpacity>
                                <Text style={styles.txt}>
                                    Sign In
                           </Text>
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
        paddingTop: 50
    },
    bottom: {
        height: "20%",
        justifyContent: "center",
        marginTop: 40
    },
    stext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        borderBottomWidth: 4,
        borderBottomColor: '#7080ea',
        width: 90,
        justifyContent: 'center',
        marginLeft: 50
    },
    s0text: {
        marginLeft: screenWidth - 340,
        fontWeight: "100",
        fontSize: 20
    },
    input: {
        width: 200,
        height: 31,
        backgroundColor: "#fff",
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        paddingLeft: 5,
        alignSelf: "center"
    },
    num: {
        fontSize: 20,
        color: "black",
        marginLeft: 3
    },
    opacity: {
        alignSelf: "center",
        marginLeft: 5
    },
    contain: {
        flexDirection: "row",
        backgroundColor: '#fff',
        margin: 10,
        width: screenWidth - 100,
        height: 60,
        alignSelf: "center",
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#c5c5c5"
    },
    main: {
        paddingTop: 10,
        height: "50%"
    },
    img: {
        width: screenWidth,
        height: 200,
        borderBottomLeftRadius: 250,
        borderBottomRightRadius: 300
    },
    low: {
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center',
    },
    container: {
        height: '20%',
    },
    txt: {
        color: "#707070",
        fontSize: 15,
        textAlign: 'center'
    },
})
