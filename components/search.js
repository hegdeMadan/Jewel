import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export default class Search extends Component {
    render() {
        return (
            <View style={styles.screen}>
               <View style={styles.contain}>
                            <TouchableOpacity style={styles.opacity}>
                            <AntDesign name="search1" size={24} color="black" />
                            </TouchableOpacity>
                            <TextInput style={styles.input} placeholder='Search Here....' />
                        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flexDirection: "row",
        backgroundColor: '#fff',
        width: screenWidth - 10,
        height: 60,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#c5c5c5",
        borderRadius:6
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
    opacity: {
        alignSelf: "center",
        marginLeft: 5
    },
})
