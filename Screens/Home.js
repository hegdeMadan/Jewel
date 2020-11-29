import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions, TextInput, Image, ViewBase, ScrollView, FlatList } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Feather, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Search from '../components/search';
import Wishcard from '../components/wishcard';
const Data = [{
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}, {
    'title': "Minimalist Japan Sweater",
}]
export default class Home extends Component {

    Card = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <View style={styles.carditem}>
                    <View style={styles.iconic}>
                        <AntDesign name="heart" size={15} color="#7080ea" style={{ textAlign: 'center' }} />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.txt} numberOfLines={1}>{item.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={styles.txt1}>$49.99</Text>
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
                    <View style={{ alignSelf: 'flex-end', marginRight: 5, flexDirection: 'row' }}>
                        <Text style={styles.title}>Home</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Search />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text style={styles.title}>Fashion Trend</Text>
                    <MaterialIcons name="tune" size={24} color="black" />
                </View>
                <FlatList
                    data={Data}
                    renderItem={this.Card}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
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
        opacity: 0.8
    },
    iconic: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: 'center',
        margin: 2
    },
    txt: {
        color: "black",
        fontSize: 16,
        margin: 5
    },
    txt1: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
    },
    carditem: {
        backgroundColor: '#7080ea',
        width: screenWidth / 2.3,
        height: 200,
        margin: 10,
        borderRadius: 15
    }
})
