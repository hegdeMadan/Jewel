import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
const Tab = createBottomTabNavigator();
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Wishlist from '../Screens/Wishlist';
import Profile from '../Screens/Profile';

export default class IndexNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#05baba',
                }}
                screenOptions={{ unmountOnBlur: true, }}
                tabBar={props => <MyTabBar {...props} />}

            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="pentagon" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarLabel: 'opencart',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="opencart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Wishlist"
                    component={Wishlist}
                    options={{
                        tabBarLabel: 'heart-o',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Profile}
                    options={{
                        tabBarLabel: 'user-o',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 80, justifyContent: "center", alignItems: "center", borderTopStartRadius: 20, borderTopEndRadius: 20, backgroundColor: "#d6d6d8", alignSelf: 'center', }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const icon = options.tabBarIcon !== undefined ?
                    options.tabBarIcon : options.tabBarLabel
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <BottomMenuItem
                            iconName={label.toString()}
                            isCurrent={isFocused}
                        />

                        <Text style={{ color: isFocused ? '#000' : '#222',  fontWeight: '400',textAlign:'center' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
export const BottomMenuItem = (props) => {
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', margin: 1, paddingRight: 15 }}>
            <FontAwesome
                name={props.iconName}
                size={24}
                style={{ color: props.isCurrent ? '#05baba' : 'grey' }}
            />
        </View>
    );
};

