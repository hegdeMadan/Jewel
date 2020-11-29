import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card} >
                <View header style={styles.header}>
                    <Image
                        style={styles.productImage}
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oZG-psMLtgCFX7UmNkp1RgHaE7%26pid%3DApi&f=1' }}
                    />
                </View>
                <View footer style={styles.footer}>
                    <View style={styles.productName}>
                        <View>
                            <Text numberOfLines={1} style={styles.productNameText}>Flat Chain</Text>
                        </View>
                        <View>
                            <Text style={styles.productCost}>120gram|20tar</Text>
                        </View>
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center", alignSelf: 'center',
                        }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ textAlign: "center" }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 146,
        height: 180,
        backgroundColor: "#c5c5c5",
        borderRadius: 6
    },
    header: {
        backgroundColor: "#c5c5c5",
        height: 144,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        height: 70,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: 1,
        borderColor: "#c5c5c5"
    },
    productImage: {
        width: 146,
        height: 180
    },
    productName: {
        width: 101,
        marginLeft: 0,
        textAlign: "center",
        alignSelf: 'center'
    },
    productNameText: {
        fontSize: 11,
        fontWeight: "600"
    },
    productCost: {
        fontSize: 11,
        fontWeight: "700"
    },
    cartContainer: {
        backgroundColor: "#CAEEFF",
        height: 36, width: 45,
        borderBottomRightRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cartIcon: {
        color: "#2B2A2A"
    },
    btn: {
        color: "white",
        backgroundColor: "#f78c94",
        height: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80,
        borderRadius: 5
    },
    stext: {
        color: "black",
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center'
    },
})
