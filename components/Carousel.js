import React from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, View, ImageBackground, TextInput, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KwnG1P3C8Pygj46bBORKawHaE3%26pid%3DApi&f=1"
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HoVzimbpYUHSD5OJwrpt9wHaFj%26pid%3DApi&f=1"
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bbLpfWXA_0jysuKH0KiQKwHaE9%26pid%3DApi&f=1"
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LPdwPm7TVFUm1wk6XFMXlgHaJ4%26pid%3DApi&f=1"
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LPdwPm7TVFUm1wk6XFMXlgHaJ4%26pid%3DApi&f=1"
                },
            ],
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{ borderRadius: 15, }}>
                <ImageBackground style={{ width: 300, height: 180, alignSelf: "center", }} source={{ uri: item.img }} >
                    <View style={{ position: 'absolute', bottom: 0, left: 45 }}>
                        <Text style={styles.txt}>Get flat 30% off</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.screen}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    renderItem={this._renderItem}
                    sliderWidth={300}
                    itemWidth={300}
                    autoplay={true}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50
    },
    txt: {
        color: "#fff",
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '800'

    },
});