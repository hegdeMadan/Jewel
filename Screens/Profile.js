import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export default class Profile extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.userInfo}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', margin: 20 }}>
                        <FontAwesome name="user-circle" size={70} color="white" />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>Hey, Nagaraj!</Text>
                            <View style={{ width: 30, backgroundColor: '#0927ed', borderRadius: 100, alignSelf: 'center', height: 30, justifyContent: 'center' }}>
                                <Feather name="edit-3" size={24} color="white" style={{ textAlign: 'center' }} />
                            </View>
                        </View>
                        <Text style={styles.titl}>Bangalore North #2</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', }}>
                            <Entypo name="address" size={30} color="#a9b4f9" />
                            <Text style={styles.tit}>Saved Address</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', }}>
                            <FontAwesome5 name="calendar-check" size={30} color="#a9b4f9" />
                            <Text style={styles.tit}>Orders</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', }}>
                            <FontAwesome5 name="hand-holding-heart" size={30} color="#a9b4f9" />
                            <Text style={styles.tit}>Wishlist</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', }}>
                            <FontAwesome name="opencart" size={30} color="#a9b4f9" />
                            <Text style={styles.tit}>Cart</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.section}>
                        <View style={{ flexDirection: 'row', }}>
                            <Ionicons name="ios-call" size={30} color="#a9b4f9" />
                            <Text style={styles.tit}>Contact-us</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Made With   </Text>
                    <AntDesign name="heart" size={15} color="#a9b4f9" />
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center' }}>  By Digiyogi Technologies</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 30
    },
    userInfo: {
        backgroundColor: '#a9b4f9',
        height: '20%',
        flexDirection: 'row'
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold'
    },
    titl: {
        color: "white",
        fontSize: 15,
        textAlign: 'left',
    },
    section: {
        width: screenWidth,
        borderBottomWidth: 2,
        height: 80,
        borderBottomColor: '#eaeaea',
        paddingLeft: 15,
        justifyContent: 'center',
    },
    tit: {
        color: "#a9b4f9",
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 25
    }
})
