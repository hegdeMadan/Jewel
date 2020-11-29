import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, Image } from 'react-native'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Top extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={styles.contain}>
                        <Image style={styles.img} source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LTeboGoFxZ1zNmrhKGYnIQHaJI%26pid%3DApi&f=1" }} />
                    </View>
                    <View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 1
    },
    img: {
        width: 350,
        height: 400,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        borderTopLeftRadius: 250,
        borderTopRightRadius: 15
    },
    contain: {
        height: '50%',
        width: screenWidth,
        alignItems: 'flex-end',

    },
})
