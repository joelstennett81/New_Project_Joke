import React from 'react';
import {Platform,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {HeaderButtons, HeaderButton, Item} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/colors';

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderButton = props => (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
);
const HeaderButtonRight = props => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-more' : 'ios-more'}
                onPress= {() => {
                    props.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    )
};
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontSize: 30,
        fontFamily: "playfair-bold",
        alignItems: 'center',
    },
    headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
    headerTitle: "Joel's Joke App",
};

const HomeStackNavigator = () => {
    return (
       <HomeStack.Navigator screenOptions = {({navigation,route}) => ({
            ...defaultStackNavOptions,
            /*headerRight: () => <HeaderButtonRight navigation={navigation} route = {route} />*/
            })}>
          <HomeStack.Screen name = "Home" component = {HomeScreen} />
          <HomeStack.Screen name = "Details" component = {DetailsScreen} />
       </HomeStack.Navigator>
    );
};

const FavoritesStackNavigator = () => {
    return (
       <FavoritesStack.Navigator screenOptions = {({navigation,route}) => ({
            ...defaultStackNavOptions,
            /*headerRight: () => <HeaderButtonRight navigation={navigation} route = {route} /> */
            })}>
            <FavoritesStack.Screen name="Favorites" component = {FavoritesScreen} />
            <FavoritesStack.Screen name="Details" component={DetailsScreen} />
       </FavoritesStack.Navigator>
    );
};

const DetailsStackNavigator = () => {
    return (
       <DetailsStack.Navigator screenOptions = {({navigation,route}) => ({
            ...defaultStackNavOptions,
            /*headerRight: () => <HeaderButtonRight navigation={navigation} route = {route} /> */
            })}>
            <DetailsStack.Screen name="Details" component = {DetailsScreen} />
            <DetailsStack.Screen name="Home" component={HomeScreen} />
       </DetailsStack.Navigator>
    );
};

const HomeTab = Platform.OS == 'android' ? createMaterialBottomTabNavigator(): createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <NavigationContainer>
            <HomeTab.Navigator
                activeColor="white"
            inactiveColor={Colors.accentColor}
                barStyle={{
                    backgroundColor: Colors.primaryColor
                }}>
                <HomeTab.Screen
                    name='Home'
                    component={HomeStackNavigator}
                    options ={{
                        tabBarIcon: ({color}) => {
                            return (
                                <Ionicons
                                    name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                                    size={24}
                                    color={color}
                                />
                            );
                        },
                        tabBarLabel: Platform.OS === 'android' ? (
                            <Text style= {{fontFamily: "playfair"}}>Home</Text>
                        ) : ('Home'),
                }}>
                </HomeTab.Screen>
                <HomeTab.Screen
                    name = 'Favorites'
                    component = {FavoritesStackNavigator}
                    options = {{
                        tabBarIcon: ({ color }) => {
                            return (
                                <Ionicons
                                    name={Platform.OS === 'android' ? 'md-star' : 'ios-star'}
                                    size = {24}
                                    color ={color}
                                />
                            );
                    },
                    tabBarLabel:
                        Platform.OS === 'android' ? (
                            <Text style={{ fontFamily: "playfair" }}>Favorites</Text>
                        ) : (
                            "Favorites"
                        ),
                    }}>
                </HomeTab.Screen>
                <HomeTab.Screen
                    name = 'About'
                    component = {DetailsStackNavigator}
                    options = {{
                        tabBarIcon: ({ color }) => {
                            return (
                                <Ionicons
                                    name={Platform.OS === 'android' ? 'md-question' : 'ios-question'}
                                    size = {24}
                                    color ={color}
                                />
                            );
                    },
                    tabBarLabel:
                        Platform.OS === 'android' ? (
                            <Text style={{ fontFamily: "playfair" }}>About</Text>
                        ) : (
                            "About"
                        ),
                    }}>
                </HomeTab.Screen>
            </HomeTab.Navigator>
        </NavigationContainer>
    );
};

/*const JokeNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            initialRouteName="Jokes"
            drawerPosition="right">
                <Drawer.Screen name="Jokes" component={HomeTabNavigator} />
                <Drawer.Screen name="Favorites" component={FavoritesStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}; */

export default HomeTabNavigator;

